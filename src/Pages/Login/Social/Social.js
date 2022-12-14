import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/googlelogo.png'

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate =useNavigate();
    let errorElement;
    
    if (error) {
            errorElement = <p className='text-danger'>Error: {error.message}</p>
    }

    if(user){
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-info w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary w-50 d-block mx-auto'>
                    <img src={google} alt="" />
                    <span className='px-2'>Google Sign In</span></button>
            </div>

        </div>

    );
};

export default Social;