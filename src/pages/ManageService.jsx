import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../Authontication/Authcontext';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

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

        console.log(data);
    }, [user?.email]);


    const handleDelete = (id, service) => {
        axios.delete(`http://localhost:5000/manageService/${id}`)
            .then(res => {
                toast.success(`${service} deleted successfully`)
                console.log(res.data);
            })
            .catch(error => {
                toast.error(error)
            })
    }

    return (
        <div className='grid grid-cols-2 mx-auto container'>
            {
                data.map(service =>
                    <div className="card w-96 bg-base-100 card-md shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title justify-center">{service?.service}</h2>
                            <img className='w-40 mx-auto' src={service?.img} alt="" />
                            <p>{(service.description).slice(0, 100)}......</p>
                            <p>Email: {service.serviceProviderEmail}</p>
                            <p><span className='font-bold'>Price:</span> {service.price}</p>
                            <div className="justify-center gap-10 card-actions">
                                <Link to={`/editService/${service._id}`} className="btn btn-primary">Edit</Link>
                                <button onClick={() => handleDelete(service._id, service.service)} className="btn btn-primary">Delete</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default ManageService;