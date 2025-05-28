import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { format } from "date-fns";
import AuthContext from '../Authontication/Authcontext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Lottie from 'lottie-react';
import empty from '../assets/empty.json';
import PageTitle from '../componenets/PageTitle';

const ServicesToDo = () => {
    const [bookServices, setBookServices] = useState([]);
    const { user, signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user?.email) return;
        axios.get(`https://serv-ease-server-rupongomez-rupongomezs-projects.vercel.app/servicesToDo/${user.email}`, { withCredentials: true })
            .then(res => {
                setBookServices(res.data);
            })
            .catch(err => {
                if (err.response?.status === 401) {
                    signOutUser();
                    navigate('/login');
                    toast.error('Session expired. Please log in again.');
                } else {
                    toast.error('Failed to load services.');
                }
            });
    }, [user?.email]);

    const handleStatus = (id, status) => {
        const serviceToUpdate = bookServices.find(service => service._id === id);
        if (!serviceToUpdate) return toast.error("Service not found.");

        if (serviceToUpdate.serviceStatus === status) {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `Status is already set to ${status}`,
            });
        }

        axios.patch(`https://serv-ease-server-rupongomez-rupongomezs-projects.vercel.app/serviceToDo/changeStatus/${id}`, { serviceStatus: status }, { withCredentials: true })
            .then(() => {
                toast.success('Status changed successfully.');
                axios.get(`https://serv-ease-server-rupongomez-rupongomezs-projects.vercel.app/servicesToDo/${user.email}`)
                    .then(res => setBookServices(res.data));
            })
            .catch(error => {
                toast.error(error.message || 'Something went wrong.');
            });
    };

    const getStatusClass = (status) => {
        if (status === "Pending") return "text-yellow-500 font-bold";
        if (status === "working") return "text-blue-500 font-bold";
        if (status === "completed") return "text-green-600 font-bold";
        return "";
    };

    return (
        <div className="mt-14 px-4">
            <PageTitle title="Service To Do"></PageTitle>

            {bookServices.length === 0 ? (
                <div className="text-center">
                    <p className="font-bold text-2xl md:text-3xl">No Orders Yet</p>
                    <Lottie className="w-64 md:w-96 mx-auto mt-10" animationData={empty} />
                </div>
            ) : (
                <>
                    {/* Mobile/Tablet View - Cards */}
                    <div className="md:hidden space-y-4 mb-6">
                        {bookServices.map((bookService, idx) => (
                            <div key={bookService._id} className="card bg-base-100 shadow-md p-4">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-lg">{bookService.service}</h3>
                                    <span className="badge badge-secondary">{idx + 1}</span>
                                </div>
                                <div className="mt-2 space-y-1 text-sm">
                                    <p><strong>Price:</strong> ${bookService.price}</p>
                                    <p><strong>Email:</strong> {bookService.userEmail}</p>
                                    <p>
                                        <strong>Status:</strong>{' '}
                                        <span className={getStatusClass(bookService.serviceStatus)}>
                                            {bookService.serviceStatus}
                                        </span>
                                    </p>
                                    <p><strong>Date:</strong> {format(new Date(bookService.startingDate), "dd/MM/yyyy")}</p>
                                    <div className="form-control mt-2">
                                        <select
                                            value={bookService.serviceStatus}
                                            onChange={(e) => handleStatus(bookService._id, e.target.value)}
                                            className="select select-bordered w-full"
                                        >
                                            <option value="Pending">Pending</option>
                                            <option value="working">Working</option>
                                            <option value="completed">Completed</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Desktop View - Table */}
                    <div className="hidden md:block overflow-x-auto">
                        <table className="table table-zebra w-full">
                            <thead>
                                <tr>
                                    <th>SL</th>
                                    <th>Service Name</th>
                                    <th>Price</th>
                                    <th className='md:hidden'>Email</th>
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
                                        <td>${bookService.price}</td>
                                        <td className='md:hidden'>{bookService.userEmail}</td>
                                        <td>
                                            <span className={getStatusClass(bookService.serviceStatus)}>
                                                {bookService.serviceStatus}
                                            </span>
                                        </td>
                                        <td>{format(new Date(bookService.startingDate), "dd/MM/yyyy")}</td>
                                        <td>
                                            <select
                                                value={bookService.serviceStatus}
                                                onChange={(e) => handleStatus(bookService._id, e.target.value)}
                                                className="select select-bordered"
                                            >
                                                <option value="Pending">Pending</option>
                                                <option value="working">Working</option>
                                                <option value="completed">Completed</option>
                                            </select>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </div>
    );
};

export default ServicesToDo;