import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { format } from "date-fns";
import AuthContext from '../Authontication/Authcontext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import empty from '../assets/empty.json';

const BookedServices = () => {
    const [bookServices, setBookServices] = useState([]);
    const { user, signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user?.email) return;
        axios
            .get(`http://localhost:5000/bookService/${user.email}`, { withCredentials: true })
            .then((res) => {
                setBookServices(res.data);
            })
            .catch((err) => {
                if (err.status === 401) {
                    signOutUser();
                    navigate('/login');
                    return toast.error(`${err.response.data.message}, Please Login`);
                }
                console.error(err);
            });
    }, [user?.email]);

    return (
        <div className="mt-14 px-4">
            {bookServices.length === 0 ? (
                <div className="text-center">
                    <p className="font-bold text-2xl md:text-3xl">You Haven't Booked Any Order Yet</p>
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
                                    <p><strong>Provider:</strong> {bookService.serviceProviderEmail}</p>
                                    <p><strong>Status:</strong> {bookService.serviceStatus}</p>
                                    <p><strong>Date:</strong> {format(new Date(bookService.startingDate), "dd/MM/yyyy")}</p>
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
                                    <th>Service Provider Email</th>
                                    <th>Status</th>
                                    <th>Starting Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookServices.map((bookService, idx) => (
                                    <tr key={bookService._id}>
                                        <th>{idx + 1}</th>
                                        <td>{bookService.service}</td>
                                        <td>${bookService.price}</td>
                                        <td>{bookService.serviceProviderEmail}</td>
                                        <td>{bookService.serviceStatus}</td>
                                        <td>{format(new Date(bookService.startingDate), "dd/MM/yyyy")}</td>
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

export default BookedServices;