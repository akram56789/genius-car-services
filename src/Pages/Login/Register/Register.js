import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();



    const navigateLogin = event => {
        navigate('/login')
    }
    if (user) {
        navigate('/home')
    }

    const handleRegister = event => {
        event.preventDefault();
        console.log(event.target.name.value);
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='register-form w-50'>
            <h2 className='text-center'> Please Register</h2>
            <form onSubmit={handleRegister} >
                <input type="text" name="name" id="" placeholder='Your Name' />

                <input type="email" name="email" id="" placeholder='Email' required />

                <input type="password" name="password" id="" placeholder='password' required />

                <input type="submit" value="Register" />
            </form>
            <p>আপনার কি আগেই আছে?<Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}> ক্লিক করুন</Link></p>

            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Register;