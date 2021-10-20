import React from 'react';
import './NavBar.css';
import logo from '../../../images/logo.png';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useHistory, NavLink } from 'react-router-dom';
import useAuth from '../../../context/useAuth';
import { signOut, getAuth } from '@firebase/auth';

const NavBar = () => {

    const { firebases } = useAuth();
    const [user, setUser] = firebases;

    const auth = getAuth();

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
        })
    }

    const history = useHistory();

    const toSignup = () => {
        history.push('/signup');
    }

    const toSignin = () => {
        history.push('/signin');
    }


    return (
        <Navbar className="sticky-top" style={{ backgroundColor: "#2C3E50", padding: "10px" }} variant="dark" expand="lg">
            <div className="container-fluid px-5 text-center">
                <NavLink to='/'>
                    <img width="60px" src={logo} alt="" />
                </NavLink>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="navbar ms-auto my-2 my-lg-0"
                        style={{ backgroundColor: "#2c3e50" }}
                        navbarScroll
                    >
                        <NavLink activeClassName="selected" to="/home">Home</NavLink>
                        <NavLink activeClassName="selected" to="/about">About</NavLink>
                        <NavLink activeClassName="selected" to="/services">All Service</NavLink>
                        <NavLink activeClassName="selected" to="/doctors">Doctors</NavLink>
                        <NavLink activeClassName="selected" to="/blogs">Blogs</NavLink>
                    </Nav>
                    <div className="text-center d-flex align-items-center">
                        <button onClick={toSignup} className="btn btn-danger btn-sm mx-4">Sign Up</button>
                        {
                            user?.email ? <button onClick={logOut} className="btn btn-danger btn-sm mx-2">Sign Out</button> : <button onClick={toSignin} className="btn btn-danger btn-sm mx-2">Sign In</button>
                        }
                        {
                            user?.email && user?.photoURL ? <div className="my-3 ms-2">
                                <img width="35px" className="rounded-circle ms-3" src={user.photoURL} alt="" /><br />
                                <span className="text-light">{user.displayName}</span>
                            </div> : <span className="text-light">{user?.displayName}</span>
                        }
                    </div>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default NavBar;