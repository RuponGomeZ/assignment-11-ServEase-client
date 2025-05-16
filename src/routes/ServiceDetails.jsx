import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const { _id, area, description, img, price, service, serviceProviderEmail, serviceProviderImg, serviceProviderName } = useLoaderData()
    console.log(service);
    return (
        <div className='flex gap-20 items-center mx-auto container w-10/12 '>
            {/* service provider info */}
            <div className='w-[750px] bg-gray-400 p-5'>
                <h2 className="font-bold">Service Provider Info</h2>
                <div className='pt-5'>
                    <img className='w-52 rounded-[100%]' src={serviceProviderImg} alt="" />
                    <p>Name: {serviceProviderName}</p>
                    <p>Location: {area}</p>
                </div>
            </div>

            {/* Service Details */}
            <div className='mt-20'>
                <img className='mx-auto w-96' src={img} alt="" />
                <p><span className='font-bold text-lg'>Service:</span> {service}</p>
                <p className='font-thin w-[]'>Service Details:{description}</p>
                <div className='flex gap-5 mt-5'>
                    <p><span className='font-bold text-lg'>Provider:</span> </p><img className='w-10 rounded-full' src={serviceProviderImg} alt="" />
                    <p className='font-bold text-lg'>{serviceProviderName}</p>
                </div>
                <p><span className='font-bold text-lg'>Price:</span> ${price}</p>
                <Link to={`/bookService/${_id}`} className='btn btn-info container'>Book Now</Link>
            </div>


            {/* <div className="hero bg-base-200 min-h-screen flex flex-col items-center gap- my-auto">
                <div className="hero-content lg:flex-row">
                    <div>
                        <h3 className='font-bold text-lg'>Service Provider Information:</h3>
                        <p className='flex items-center gap-5'>Service Provider:<p> {serviceProviderName}</p> <img className='w-14 rounded-full' src={serviceProviderImg} />
                        </p>
                        <p>Area: {area}</p>
                    </div>
                </div>
                <div className='flex mx-auto items-center text-center'>
                    <img
                        src={img}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className=" font-bold">{service}</h1>
                        <p className="py-6 text-wrap w-9/12">{description}</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div> */}

        </div>
    );
};

export default ServiceDetails;