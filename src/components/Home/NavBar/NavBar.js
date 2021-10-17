import React from 'react';
import './NavBar.css';
import logo from '../../../images/logo.png';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar style={{ backgroundColor: "#2c3e50" }} variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>
                    <img width="60px" src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="navbar ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px', backgroundColor: "#2c3e50" }}
                        navbarScroll
                    >
                        <Nav.Link><Link to="/home">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/about">About</Link></Nav.Link>
                        <Nav.Link><Link to="/services">All Service</Link></Nav.Link>
                        <Nav.Link><Link to="/doctors">Doctors</Link></Nav.Link>
                        <Nav.Link><Link to="/blogs">Blogs</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;