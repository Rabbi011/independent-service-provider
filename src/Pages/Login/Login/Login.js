import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Social from '../Social/Social';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
      );
// eamil error 
    if (error) {
        errorElement = <p className='text-danger'>Error: {error.message}</p>
    }


    if (user) {
        navigate(from, { replace: true });
    }

    const handelSubmit = event => {

        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);


    }
    const navigateSignUp = event => {
        navigate('/signUp');
    }
    
    const resetPassword = async() =>{
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');

    }

    return (

        <div className='container w-50 mx-auto'>
            <h1 className='text-primary text-center mt-2'>Please login</h1>
            <Form onSubmit={handelSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p>New to Gym Trainer? <Link to="/signUp" className='text-primary pe-auto text-decoration-none' onClick={navigateSignUp}>Please SignUp</Link></p>

            <p>Forger Password? <Link to="/signUp" className='text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</Link></p>
            <Social></Social>

        </div>





    );
};

export default Login;