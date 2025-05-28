import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import { Link } from 'react-router-dom';

const PopularServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('https://serv-ease-server-rupongomez-rupongomezs-projects.vercel.app/services')
            .then(res => {
                setServices(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);
    return (
        <div>
            <h2 className='my-20 text-center font-bold text-2xl'>Popular services</h2>
            <div key={services._id} className='grid grid-cols-1 md:grid-cols-2  gap-10 my-10  mx-auto '>
                {
                    services.slice(0, 6).map(service =>
                        <ServiceCard service={service} key={service._id}></ServiceCard>
                    )
                }
            </div>
            <div className="card-actions justify-center">
                <Link to={`/allServices`} className="btn btn-primary">Show All</Link>
            </div>
        </div>
    );
};

export default PopularServices;