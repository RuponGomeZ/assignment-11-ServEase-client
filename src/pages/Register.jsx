import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import loginAnimation from '../assets/loginAnimation.json'
import { Link } from 'react-router-dom';
import AuthContext from '../Authontication/Authcontext';

const Register = () => {

    const { signupWithEmailAndPassword } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const name = form.name.value
        const photoURL = form.photoURL.value
        const password = form.password.value

        console.log(name, email, photoURL, password);
        signupWithEmailAndPassword(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen flex items-center justify-center">
            <div className="hero-content flex-col gap-20 lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Signup now!</h1>
                    <Lottie animationData={loginAnimation}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} className="fieldset">

                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" />

                            <label className="label">Name</label>
                            <input name='name' type="text" className="input" placeholder="Write Your Name" />

                            <label className="label">Photo URL</label>
                            <input name='photoURL' type="text" className="input" placeholder="Write Your Photo URL" />

                            <label className="label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password" />

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