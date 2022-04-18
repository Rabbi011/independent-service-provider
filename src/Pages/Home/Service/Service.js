import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {

    const { id, name, img, description, price } = service;
    const navigate = useNavigate()
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div id='services' className='service-container'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <Link to="/checkOuts">
            <button onClick={() => navigateToServiceDetail(id)} className='three-d-button-design'>Book Now</button>
            </Link>
            

        </div>
    );
};

export default Service;