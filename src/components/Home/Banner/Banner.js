import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';
import logo from '../../../images/logo.png';
import bannerImg from '../../../images/banner-img.png';

const Banner = () => {
    return (
        <div>
            <div className="banner-area">
                <Container>
                    <Row className="d-flex align-items-center">
                        <Col lg={6} md={6} xs={12}>
                            <img width="415px" src={bannerImg} alt="" />
                        </Col>
                        <Col lg={6} md={6} xs={12}>
                            <img width="140px" src={logo} alt="" />
                            <h2>Welcome To<br /> We Care Hospital Ltd.</h2>
                            <p><span className="fw-bold fs-5">WE CARE</span> is a simple acronym to guide how we interact with patients and one another. It's a reminder for us all as Sansum Clinic employees, to commit.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Banner;