import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import './Banner.css';
import logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';
import banner1 from '../../../images/bg-1.jpg';
import banner2 from '../../../images/bg-2.jpg';
import banner3 from '../../../images/bg-3.jpg';

const Banner = () => {
    return (
        <div className="banner-area" >
            <Carousel>
                <Carousel.Item className="overlay">
                    <img
                        className="d-block w-100 myImg"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>Welcome To<br /> <span className="hospital-name">We Care Hospital Ltd.</span></h1>
                        <p><span className="fw-bold fs-5">WE CARE</span> is a simple acronym to guide how we interact with patients and one another.<br /> It's a reminder for us all as Sansum Clinic employees, to commit.</p>
                        <Link to='/appointment'>
                            <button className="btn btn-danger btn-lg">Appoint Now <i class="fas fa-arrow-circle-right"></i></button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="overlay">
                    <img
                        className="d-block w-100 myImg"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h1>We Have the Best Doctors<br />And ICU for you.</h1>
                        <p><span className="fw-bold fs-5">WE CARE</span> is a simple acronym to guide how we interact with patients and one another.<br /> It's a reminder for us all as Sansum Clinic employees, to commit.</p>
                        <Link to='/appointment'>
                            <button className="btn btn-danger btn-lg">Appoint Now <i class="fas fa-arrow-circle-right"></i></button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="overlay">
                    <img
                        className="d-block w-100 myImg"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>Our Hospital Ready to 24 Hours<br /> to give service.</h1>
                        <p>WE CARE is a simple acronym to guide how we interact with patients and one another.<br /> It's a reminder for us all as Sansum Clinic employees, to commit.</p>
                        <Link to='/appointment'>
                            <button className="btn btn-danger btn-lg">Appoint Now <i class="fas fa-arrow-circle-right"></i></button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;