import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId, img} = useParams();
    return (
        <div>
            <h2>Welcome to detail:{serviceId}</h2>
            <img src={img} alt="" />
        </div>
    );
};

export default ServiceDetail;