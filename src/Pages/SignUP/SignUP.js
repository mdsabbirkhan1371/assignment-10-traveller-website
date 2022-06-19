import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from "react-router-dom";
import './SignUP.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../src/firebase.init'
import SocialLogin from '../Login/SocialLogin/SocialLogin';




const SignUP = () => {

    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    if (user) {
        navigate('/')
    }
    const handleSignUp = (event) => {
        event.preventDefault()

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='w-50 mx-auto my-5'>
            <h2 className='text-primary'>Please Sign Up here!!</h2>
            <Form onSubmit={handleSignUp}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <p className='link'>Allready have an Account? <Link to='/login'>Please Login</Link></p>
                <Button variant="primary" type="submit">
                    SignUp
                </Button>
            </Form>
            <SocialLogin></SocialLogin>

        </div>
    );
};

export default SignUP;