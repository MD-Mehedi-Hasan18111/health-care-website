import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = (props) => {

    // console.log(props.service);

    const { id, image, name, type } = props.service;

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
                <div className="text-center p-2">
                    <Link to={`/details/${id}`}>
                        <button className="btn detail-btn btn-danger m-2 w-75">See Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;