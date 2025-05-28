import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import PageTitle from '../componenets/PageTitle';

const ServiceDetails = () => {
    const {
        _id,
        area,
        description,
        img,
        price,
        service,
        serviceProviderEmail,
        serviceProviderImg,
        serviceProviderName,
    } = useLoaderData();

    return (
        <div className="flex flex-col items-center px-4 py-6 mx-auto container max-w-full">
            <PageTitle title="Service Details"></PageTitle>

            {/* Service Provider Info */}
            <div className="bg-blue-400 p-5 rounded-md w-full max-w-md text-center shadow-md mb-6">
                <h2 className="font-bold mb-4 text-lg">Service Provider Info</h2>
                <img
                    className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                    src={serviceProviderImg}
                    alt="Provider"
                />
                <p>Name: {serviceProviderName}</p>
                <p className='flex text-center justify-center gap-1'>Location: <FaMapMarkerAlt /> {area}</p>
            </div>

            {/* Service Details */}
            <div className="mt-4 w-full max-w-lg text-left">
                <img
                    className="mx-auto w-full max-w-xs md:max-w-sm rounded-md mb-4"
                    src={img}
                    alt={service}
                />
                <h1 className="text-xl font-bold">{service}</h1>
                <p className="mt-2">{description}</p>

                <div className="flex items-center gap-3 mt-4">
                    <span className="font-bold">Provider:</span>
                    <img
                        className="w-10 h-10 rounded-full"
                        src={serviceProviderImg}
                        alt={serviceProviderName}
                    />
                    <p className="font-bold">{serviceProviderName}</p>
                </div>

                <p className="mt-3">
                    <span className="font-bold">Price:</span> ${price}
                </p>

                <Link
                    to={`/bookService/${_id}`}
                    className="btn btn-info w-full mt-4"
                >
                    Book Now
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;