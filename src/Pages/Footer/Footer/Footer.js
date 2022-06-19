import React from 'react';
import logo from '../../../images/logo/Trevia-Logo (1).png'
import './Footer.css'
import img from '../../../images/galary/g-1.jpg'
import img1 from '../../../images/galary/g-2.jpg'
import img2 from '../../../images/galary/g-3.jpg'
import img3 from '../../../images/galary/g-4.jpg'
import img4 from '../../../images/galary/g-10.jpg'
import img5 from '../../../images/galary/g-6.jpg'
import img6 from '../../../images/galary/g-9.jpg'

import img8 from '../../../images/galary/g-9.jpg'

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear()


    return (

        <div className='footer-container p-3'>

            <div className="footer">
                <div className='single-item p-3 me-3'>
                    <img style={{ width: '150px' }} src={logo} alt="" />
                    <p>This is the best travel Service Center.You can get a good Service from Us. We hope, we can make happy Our clients. </p>
                </div>
                <div className='single-item p-3 me-3'>
                    <h3>Services</h3>
                    <p>Contact Us</p>
                    <p>Packages</p>
                    <p>Services</p>
                    <p>Destination</p>
                </div>
                <div className='single-item p-3 me-3'>
                    <h3>Contacts</h3>
                    <h5>Address</h5>
                    <p>London Eye, London, UK</p>
                    <h5>Phone</h5>
                    <p>+56 5433 654</p>
                    <p>+43 6554 234</p>
                </div>
                <div className='single-item p-3 me-3'>
                    <h3>Galary</h3>
                    <div className='img-container'>
                        <img style={{ width: '75px' }} src={img} alt="" />
                        <img style={{ width: '75px' }} src={img1} alt="" />
                        <img style={{ width: '75px' }} src={img2} alt="" />
                        <img style={{ width: '75px' }} src={img3} alt="" />
                        <img style={{ width: '75px' }} src={img4} alt="" />
                        <img style={{ width: '75px' }} src={img5} alt="" />
                        <img style={{ width: '75px' }} src={img6} alt="" />
                        <img style={{ width: '75px' }} src={img8} alt="" />
                    </div>
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