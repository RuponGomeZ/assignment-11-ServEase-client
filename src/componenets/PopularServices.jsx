import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const PopularServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/services')
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
            <div key={services._id} className='grid grid-cols-1 lg:grid-cols-3 gap-10 my-10 w-10/12 mx-auto '>
                {
                    services.slice(0, 6).map(service =>
                        <ServiceCard service={service}></ServiceCard>
                    )
                }
            </div>
        </div>
    );
};

export default PopularServices;