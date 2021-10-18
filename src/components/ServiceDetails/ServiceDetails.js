import React from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {

    const { id } = useParams();

    return (
        <div>
            <h2>Service no: {id}</h2>
        </div>
    );
};

export default ServiceDetails;