import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import logo from '../../../images/logo/Trevia-Logo (1).png'
import { Link } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <div>
            <Navbar className='text-light' collapseOnSelect expand="lg" bg="light" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img style={{ height: '40px' }} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle className='bg-info' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to='/home'>Home</Link>
                            <Link to='/services'>Services</Link>
                            <Link to='blogs'>Blogs</Link>
                            <Link to='about'>About Us</Link>
                        </Nav>
                        <Nav>
                            <Link to='/signup'>Signup</Link>
                            <Link to='/login'>Login</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div >
    );
};

export default Header;