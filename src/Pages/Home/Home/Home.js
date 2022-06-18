
import React from 'react';
import home1 from '../../../images/home/h-1.webp'
import home2 from '../../../images/home/h-2.webp'
import home4 from '../../../images/home/h-4.webp'
import About from '../../About/About';
import './Home.css'

const Home = () => {

    return (
        <div className='my-5'>
            <div className='home text-center mb-2' >
                <p>Travel Agency Trevia</p>
                <h1>Explore the World and Become</h1>
                <h1>Your Own Tour Guide</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                <button className='btn btn-primary px-4 mt-3 rounded-pill'>Learn more</button>
            </div>
            <div className='items'>
                <div className=' d-flex p-3 border-3 bg-light border-rounded text-center'>
                    <div className='item mx-3 border border-danger p-2 border-start-0 border-top-0 border-bottom-0'>
                        <h3>Comfortable</h3>
                        <p>This is a very Comfortable service from your best choice we hope</p>
                    </div>
                    <div className=' item mx-3 border border-danger p-2 border-start-0 border-top-0 border-bottom-0'>
                        <h3>Top services</h3>
                        <p>You can get top service from our management.We hope it will convince you</p>
                    </div>
                    <div className=' item mx-3 border border-danger p-2 border-start-0 border-top-0 border-bottom-0'>
                        <h3>Affordable</h3>
                        <p>It is very reasonable.We hope every one can affortable</p>
                    </div>
                </div>
            </div>
            <div className='py-5'>
                <About></About>
            </div>
        </div>
    );
};

export default Home;