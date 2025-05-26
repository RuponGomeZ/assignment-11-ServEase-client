import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { format } from "date-fns";
import AuthContext from '../Authontication/Authcontext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { div } from 'motion/react-client';
import Lottie from 'lottie-react';
import empty from '../assets/empty.json'
const ServicesToDo = () => {

    const [bookServices, setBookServices] = useState([])
    const { user, signOutUser, setLoading, loading } = useContext(AuthContext)

    const navigate = useNavigate()

    console.log(bookServices);
    const handleStatus = (id, status) => {

        const serviceToUpdate = bookServices.find(service => service._id === id);

        if (!serviceToUpdate) {
            return toast.error("Service not found");
        }

        console.log("Current status (from latest state):", serviceToUpdate.serviceStatus);
        console.log("New status:", status);

        if (serviceToUpdate.serviceStatus === status) {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `Status is already set to ${status}`,
                footer: '<a href="#">Why do I have this issue?</a>'
            });
            // toast.error(`Status is already set to ${status}`);
        }


        axios.patch(`http://localhost:5000/serviceToDo/changeStatus/${id}`, { serviceStatus: status }, { withCredentials: true })
            .then(res => {
                toast.success('Status Changed')
                axios.get(`http://localhost:5000/servicesToDo/${user.email}`)
                    .then(res => setBookServices(res.data));
            })
            .catch(error => {
                toast.error(error)

            })

    }


    // useEffect(() => {
    //     fetchAllServices()
    // }, [user])

    // const fetchAllServices = async () => {
    //     const { data } = await axiosSecure.get(`http://localhost:5000/servicesToDo/namnai@gmail.com`)
    //     setBookServices(data.data)
    // }



    useEffect(() => {
        if (!user || !user.email) return;
        axios.get(`http://localhost:5000/servicesToDo/${user.email}`, { withCredentials: true })
            .then(res => {
                setBookServices(res.data)
            })
            .catch(err => {
                if (err.response && err.response.status === 401) {
                    signOutUser();
                    navigate('/login');
                    toast.error('Unauthorized access. Please login.');
                } else {
                    toast.error('Something went wrong.');
                }
            });
    }, [user?.email]);




    // if (loading) return <LoadinSpinner></LoadinSpinner>


    const getStatusClass = (status) => {
        if (status === "Pending") return "text-yellow-500 font-bold";
        if (status === "working") return "text-blue-500 font-bold";
        if (status === "completed") return "text-green-600 font-bold";
        return "";
    };


    return (
        <div className='mt-14'>
            {bookServices.length === 0 ?
                <div>
                    <p className='font-bold text-3xl text-center'>No Order Yet</p>
                    <Lottie className='w-96 mt-16 mx-auto bg-gray-300 rounded-full' animationData={empty}></Lottie>
                </div>
                : <div className="overflow-visible">
                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Service Name</th>
                                <th>Price</th>
                                <th> Email</th>
                                <th>Current Status</th>
                                <th>Starting Date</th>
                                <th>Change Status</th>

                            </tr>
                        </thead>
                        <tbody>
                            {bookServices.map((bookService, idx) => (
                                <tr key={bookService._id}>
                                    <th>{idx + 1}</th>
                                    <td>{bookService.service}</td>
                                    <td>{bookService.price}</td>
                                    <td>{bookService.userEmail}</td>
                                    <td> <span className={getStatusClass(bookService.serviceStatus)}>
                                        {bookService.serviceStatus}
                                    </span></td>
                                    <td>{format(new Date(bookService.startingDate), "dd/MM/yyyy")}</td>
                                    <td>
                                        <select value={bookService.serviceStatus} onChange={e => handleStatus(bookService._id, e.target.value)} className="select">
                                            <option value="Pending">pending</option>
                                            <option value="working">working</option>
                                            <option value="completed">completed</option>
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>}
        </div>
    );
};

export default ServicesToDo;