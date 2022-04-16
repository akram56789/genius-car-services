import React from 'react';
import './SocialLogin.css';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center '>
                <div style={{ height: '1px' }} className="bg-dark w-50" > </div>
                <p className='m-2'>or</p>
                <div style={{ height: '1px' }} className="bg-dark w-50"></div>
            </div>
            <div className="google-btn d-flex">
                <button className='btn d-block mx-auto'> 
                    <img style={{height: '50px'}} src="https://live.staticflickr.com/4199/35432193725_915796fdac_b.jpg" alt="" />
                    Google 
                </button>
                <button className='btn d-block mx-auto'> 
                    <img style={{height: '55px'}} src="https://i.pinimg.com/564x/5f/c6/d7/5fc6d70b1b392b79a2072b869680189c.jpg" alt="" />
                    Facebook 
                   
                </button>
                <button className='btn d-block mx-auto'> 
                    <img style={{height: '50px'}} src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="" />
                     GitHub
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;