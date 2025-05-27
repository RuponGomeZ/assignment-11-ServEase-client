import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    return (
        <div>
            <div className="card h-[500px] bg-base-200 w-80 shadow-sm  mx-auto container">
                <figure>
                    <img
                        className='w-60'
                        src={service.img} />
                </figure>
                <div className="card-body sm:w-40 lg:w-full">
                    <h2 className="card-title">{service.service}</h2>
                    <p>{(service.description).slice(0, 100)}......</p>
                    <div className="card-actions justify-end">
                        <Link to={`/serviceDetails/${service._id}`} className="btn btn-primary">View Details</Link>
                    </div>
                    <div className='flex items-center gap-5'>
                        <img className='w-14 rounded-full' src={service.serviceProviderImg} alt="" />
                        <p className='text-lg'>Service by: <span className='font-bold'>{service.serviceProviderName}</span></p>
                    </div>
                    <p className='text-lg'>Price: $<span className='font-bold'>{service.price}</span></p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;