import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOuts = () => {
    const {serviceId} = useParams() 
    return (
        <div>
            <h1>This is check out{serviceId}</h1>
        </div>
    );
};

export default CheckOuts;