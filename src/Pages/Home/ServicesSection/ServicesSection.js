import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './ServicesSection.css'

const ServicesSection = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('ServicesSection.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1 className='services-title'>Our Services</h1>
            <div  className='services-container'>
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
            </div>
           
        </div>
    );
};

export default ServicesSection;