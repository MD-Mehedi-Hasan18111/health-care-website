import React, { useEffect, useState } from 'react';
import ServiceCard from '../../ServiceCard/ServiceCard';
import './TopServices.css';

const TopServices = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        const url = 'https://raw.githubusercontent.com/MD-Mehedi-Hasan18111/health-care-data/main/services.json';
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    // console.log(services);

    return (
        <div>
            <div className="container">
                <div className="my-4 top-service">
                    <span><i class="fas fa-hand-holding-medical fs-1 mb-2"></i></span>
                    <h1 className="heading">Our Special <span>Services</span></h1>
                    <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-5 my-1 ps-3">
                        {
                            services?.slice(0, 6).map(service => <ServiceCard key={service.id} service={service} />)
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default TopServices;