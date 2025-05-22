import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { format, compareAsc } from "date-fns";
import AuthContext from '../Authontication/Authcontext';


const BookedServices = () => {
    const [bookServices, setBookServices] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        axios.get(`http://localhost:5000/bookService/${user.email}`)
            .then(res => {
                setBookServices(res.data)
            })
            .catch(err => {
                console.error(err);
            });
    }, [user?.email]);


    return (
        <div className='mt-14'>
            {bookServices.length === 0 ? <p>You Haven't Book Any Order Yet</p> : <div className="overflow-x-auto">
                <table className="table table-zebra">
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
                                <td>{bookService.price}</td>
                                <td>{bookService.serviceProviderEmail}</td>
                                <td>{bookService.serviceStatus}</td>
                                <td>{format(new Date(bookService.startingDate), "dd/MM/yyyy")}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>}
        </div>
    );
};

export default BookedServices;