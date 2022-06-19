import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import facbook from '../../../images/socialicon/facebook.png'
import google from '../../../images/socialicon/google2.png'
import github from '../../../images/socialicon/github.png'

const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    let errorElement;
    if (error || error1) {
        errorElement =
            <div>
                <p className='text-danger'>Error: {error?.message}{error1?.message}</p>
            </div>

    }
    if (user || user1) {
        navigate('/home')
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px' }} className='w-50 bg-info'></div>
                <p className='mt-2 p-2 fs-3'>or</p>
                <div style={{ height: '2px' }} className='w-50 bg-info'></div>

            </div>
            {errorElement}

            <div>
                <button onClick={() => signInWithGoogle()}
                    className='btn btn-success p-3  w-50 d-block mx-auto my-3'>
                    <img style={{ width: '35px' }} src={google} alt="" />
                    <span className='p-2'>Google Sign In</span>
                </button>

                <button
                    className='btn btn-success p-3  w-50 d-block mx-auto my-3'>
                    <img className='rounded' style={{ width: '35px' }} src={facbook} alt="" />
                    <span className='p-2'>Facebook Sign In</span>
                </button>

                <button onClick={() => signInWithGithub()}
                    className='btn btn-success p-3 w-50 d-block mx-auto my-3'>
                    <img className='rounded' style={{ width: '35px' }} src={github} alt="" />
                    <span className='p-2'>Github Sign In</span>
                </button>
            </div>
        </div>
    );


};

export default SocialLogin;