import React, { useEffect, useState } from 'react';

import Service from '../Service/Service';
import './services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='my-5'>
            <div className='text-center mb-5'>
                <p className='fs-3 mt-3'>Our Service</p>
                <h1 className='text-info'>Make Your Next Trip Awesome!!!</h1>
            </div>
            <div className="container">
                <div className='row ps-5'>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        >
                        </Service>)
                    }

                </div>
            </div>

        </div>
    );
};

export default Services;