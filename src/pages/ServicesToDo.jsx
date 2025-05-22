import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { format } from "date-fns";
import AuthContext from '../Authontication/Authcontext';

const ServicesToDo = () => {

    const [bookServices, setBookServices] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        axios.get(`http://localhost:5000/servicesToDo/${user.email}`)
            .then(res => {
                setBookServices(res.data)
            })
            .catch(err => {
                console.error(err);
            });
    }, [user?.email]);


    return (
        <div className='mt-14'>
            {bookServices.length === 0 ? <p>No Order Yet</p> : <div className="overflow-visible">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Service Name</th>
                            <th>Price</th>
                            <th> Email</th>
                            <th>Status</th>
                            <th>Starting Date</th>
                            <th>Status</th>

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
                                <td>
                                    <select defaultValue="Pick a color" className="select">
                                        <option disabled={true}>Pick a color</option>
                                        <option>Crimson</option>
                                        <option>Amber</option>
                                        <option>Velvet</option>
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