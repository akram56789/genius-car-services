import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();



    const navigateLogin = event => {
        navigate('/login')
    }

    const handleRegister = event => {
        event.prevenDefault();
    }
    return (
        <div className='register-form'>
            <h2 className='text-center'> Please Register</h2>
            <form onSubmit={handleRegister} >
                <input type="text" name="name" id="" placeholder='Your Name' />

                <input type="email" name="email" id="" placeholder='Email' required />

                <input type="password" name="password" id="" placeholder='password' required />

                <input type="submit" value="Register" />
            </form>
            <p>আপনার কি আগেই আছে?<Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}> ক্লিক করুন</Link></p>

        </div>
    );
};

export default Register;