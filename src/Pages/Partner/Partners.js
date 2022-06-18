import React from 'react';
import img from '../../images/partner/1.png'
import img1 from '../../images/partner/2.png'
import img2 from '../../images/partner/3.png'
import img3 from '../../images/partner/4.png'
const Partners = () => {
    return (
        <div className='my-5 container'>

            <h2 className='text-center'>Our Partners</h2>

            <div className='d-flex justify-content-between p-3'>
                <div>
                    <img style={{ width: '140px' }} src={img} alt="" />
                </div>
                <div>
                    <img style={{ width: '140px' }} src={img2} alt="" />
                </div>
                <div>
                    <img style={{ width: '140px' }} src={img3} alt="" />
                </div>
                <div>
                    <img style={{ width: '140px' }} src={img1} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Partners;