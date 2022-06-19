
import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

import SocialLogin from '../SocialLogin/SocialLogin';

import './Login.css'


const Login = () => {

    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email has been Sent')
        }
        else {
            toast('Enter Your Email Please')
        }
    }
    if (loading || sending) {
        return <Loading></Loading>
    }
    if (error) {
        errorElement =
            <div>
                <p className='text-danger'>Error: {error?.message}</p>
            </div>

    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleLogin = event => {

        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);

    }
    return (

        <div className='w-50 mx-auto my-5'>

            <h2>Please Login!!</h2>
            <Form onSubmit={handleLogin}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} name='password' type="password" placeholder="Password" required />
                </Form.Group>

                <p className='signup'>Don't have an Account? <Link to='/signup'>Please Create An Account</Link></p>

                <p> Forger Password?<button className='text-primary text-decoration-none btn btn-link' onClick={resetPassword}> Forget  Now</button> </p>

                <Button variant="primary" type="submit">
                    Login
                </Button>
                <ToastContainer />
            </Form>
            {errorElement}

            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Login;