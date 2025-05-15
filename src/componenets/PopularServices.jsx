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
            <div className='grid grid-cols-2 justify-center items-center gap-5 '>
                {
                    services.map(service =>
                        <ServiceCard service={service}></ServiceCard>
                    )
                }
            </div>
        </div>
    );
};

export default PopularServices;