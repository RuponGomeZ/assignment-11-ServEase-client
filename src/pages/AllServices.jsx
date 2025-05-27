import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllServices = () => {

    const [services, setServices] = useState([])
    const [search, setSearch] = useState('')


    console.log(search);
    useEffect(() => {
        axios.get(`http://localhost:5000/services?search=${search}`)
            .then(res => setServices(res.data))
            .catch(error => console.log(error))
    }, [search])

    return (
        <div>
            <div className='flex items-center'>
                <h2 className='text-center font-bold text-4xl my-10 flex-1'>All services Available To Book</h2>
                <div>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input onChange={e => setSearch(e.target.value)} type="search" required placeholder="Search" />
                    </label>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 my-10 w-9/12 mx-auto'>
                {
                    services.map(service => {
                        return (
                            <div key={service._id}>

                                <div className="card bg-base-200 w-80 shadow-sm  mx-auto container">
                                    <figure>
                                        <img
                                            className='w-60'
                                            src={service.img} />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{service.service}</h2>
                                        <p>{(service.description).slice(0, 100)}......</p>
                                        <div className="card-actions justify-end">
                                            <Link to={`/serviceDetails/${service._id}`} className="btn btn-primary">See Details</Link>
                                        </div>
                                        <div className='flex items-center gap-5'>
                                            <img className='w-14 rounded-full' src={service.serviceProviderImg} alt="" />
                                            <p className='text-lg'>Service by: <span className='font-bold'>{service.serviceProviderName}</span></p>
                                        </div>
                                        <p className='text-lg'>Price: $<span className='font-bold'>{service.price}</span></p>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default AllServices;