import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../Authontication/Authcontext';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import empty from '../assets/empty.json';
import Lottie from 'lottie-react';
import PageTitle from '../componenets/PageTitle';


const ManageService = () => {

    const { user } = useContext(AuthContext)

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/manageService/${user.email}`)
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
                console.error(err);
            });

        // console.log(data);
    }, [user?.email, data]);


    const handleDelete = (id, service) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/manageService/${id}`, { withCredentials: true })
                    .then(res => {
                        // toast.success(`${service} deleted successfully`)
                        Swal.fire({
                            title: "Deleted!",
                            text: `${service} deleted successfully`,
                            icon: "success"
                        });
                        console.log(res.data);
                    })
                    .catch(error => {
                        toast.error(error)
                    })

            }
        });


    }

    return (
        <div>
            <PageTitle title="Manage Service"></PageTitle>
            {data.length === 0 ? (
                <div className='font-bold text-2xl text-center mt-5'>
                    <h2>You haven't add any service yet</h2>
                    <Lottie className="w-64 md:w-96 mx-auto mt-10" animationData={empty}></Lottie>
                </div>
            ) : (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto justify-center items-center gap-10 w-fit container'>
                {
                    data.map(service =>
                        <div className="card w-60 h-[450px] bg-base-100 card-sm lg:card-md shadow-sm">
                            <div className="card-body">
                                <h2 className="card-title justify-center">{service?.service}</h2>
                                <img className='w-40 mx-auto' src={service?.img} alt="" />
                                <p>{(service.description).slice(0, 100)}......</p>
                                <p>Email: {service.serviceProviderEmail}</p>
                                <p><span className='font-bold'>Price:</span> {service.price}</p>
                                <div className="justify-center gap-4 md:gap-10 card-actions">
                                    <Link to={`/editService/${service._id}`} className="btn btn-primary">Edit</Link>
                                    <button onClick={() => handleDelete(service._id, service.service)} className="btn btn-primary">Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>)}

        </div>

    );
};

export default ManageService;