import Lottie from 'lottie-react';
import React from 'react';
import loginAnimation from '../assets/loginAnimation.json'
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="hero bg-base-200 min-h-screen flex items-center justify-center">
            <div className="hero-content flex-col gap-20 lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Signup now!</h1>
                    <Lottie animationData={loginAnimation}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="label">Name</label>
                            <input type="text" className="input" placeholder="Write Your Name" />
                            <label className="label">Photo URL</label>
                            <input type="url" className="input" placeholder="Write Your Photo URL" />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Signup</button>
                        </form>
                        <p>Don't have an account? <Link to={'/login'}><span className='font-bold underline'>Login</span></Link> Now</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;