import React from 'react';
import logo from '../../../images/logo/Trevia-Logo (1).png'
import './Footer.css'

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear()


    return (

        <div className='footer-container p-5'>

            <div className="footer">
                <div className='p-3 me-3'>
                    <img style={{ width: '150px' }} src={logo} alt="" />
                    <p>This is the best travel Service Center.You can get a good Service from Us. We hope, we can make happy Our clients. </p>
                </div>
                <div className='p-3 me-3'>
                    <h3>Services</h3>
                    <p>Contact Us</p>
                    <p>Packages</p>
                    <p>Services</p>
                    <p>Destination</p>
                </div>
                <div className='p-3 me-3'>
                    <h3>Contacts</h3>
                    <h5>Address</h5>
                    <p>London Eye, London, UK</p>
                    <h5>Phone</h5>
                    <p>+56 5433 654</p>
                    <p>+43 6554 234</p>
                </div>
                <div className='p-3 me-3'>
                    <h3>Galary</h3>
                </div>
            </div>


            <footer className='text-center fs-4 mt-5'>
                <p>
                    <small>Copywrite © {year} Trevia Template • All Rights Reserved</small>
                </p>
            </footer>
        </div>
    );
};

export default Footer;