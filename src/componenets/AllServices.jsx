import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllServices = () => {
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

        </div>
    );
};

export default AllServices;