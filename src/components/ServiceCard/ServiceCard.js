import React from 'react';
import './ServiceCard.css';

const ServiceCard = (props) => {

    console.log(props.service);

    const { image, name, type } = props.service;

    return (
        <div className="col">
            <div className="type-span">
                <span className="type">{type}</span>
            </div>
            <div className="serviceCard card h-100" style={{ width: "20rem" }}>
                <img height="200px" width="100%" src={image} className="card-img-top" alt="..." />
                <div class="card-body text-center">
                    <h5 class="card-title">{name}</h5>
                </div>
                <div className="card-footer text-center">
                    <button className="btn btn-primary m-2 w-100">See Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;