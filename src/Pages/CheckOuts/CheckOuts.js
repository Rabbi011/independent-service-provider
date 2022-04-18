import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOuts = () => {
    const {serviceId} = useParams() 
    return (
        <div className='container'>
            <h1 className='text-info text-center mt-5'>welcome to my secret page{serviceId}</h1>
        </div>
    );
};

export default CheckOuts;