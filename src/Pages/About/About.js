import React from 'react';
import picture from '../../images/galary/g-7.png'
import Progress from '../Pogressbar/Progress';
const About = () => {
    return (
        <div className=' p-5 mt-3 container d-flex justify-content-center align-items-center'>
            <div className='p-2'>
                <h3>About Us</h3>
                <h1>We Make Dreams</h1>
                <h1>Come True!</h1>
                <p>A travel agency is a private retailer or public service that provides travel and tourism-related services to the general public on behalf of accommodation or travel suppliers to offer different kinds of travelling packages for each destination.</p>
                <Progress></Progress>
            </div>
            <div>
                <img className='img-fluid' src={picture} alt="" />
            </div>
        </div>
    );
};

export default About;