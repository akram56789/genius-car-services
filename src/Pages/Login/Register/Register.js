import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css';

const Register = () => {
    const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();



    const navigateLogin = event => {
        navigate('/home')
    }
    if (user) {
        navigate('/home');
        console.log('user', user);
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        console.log(event.target.name.value);
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;
       await createUserWithEmailAndPassword(email, password);
       await updateProfile({ displayName: name });
       console.log('Updated profile');
       navigate('/home');



    }
    return (
        <div className='register-form w-50'>
            <h2 className='text-center'> Please Register</h2>
            <form onSubmit={handleRegister} >
                <input type="text" name="name" id="" placeholder='Your Name' />

                <input type="email" name="email" id="" placeholder='Email' required />

                <input type="password" name="password" id="" placeholder='password' required />
                <input onClick={() => setAgree(!agree)} className='mb-4' type="checkbox" name="terms" id="" />
                {/* <label className={agree ? ' ps-2 text-primary' : 'ps-2 text-danger'} htmlFor="terms">Accept Terms and Conditions</label> */}
                <label className={`ps-2 ${agree ? 'text-primary' : 'text-danger'}`} htmlFor="terms">Accept Terms and Conditions</label>

                <input disabled={!agree} className='w-50 mx-auto btn btn-primary' type="submit" value="Register" />
            </form>
            <p>??????????????? ?????? ???????????? ??????????<Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}> ??????????????? ????????????</Link></p>

            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Register;

 