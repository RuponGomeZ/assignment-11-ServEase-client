import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import signupAnimation from '../assets/signupAnimation.json'
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../Authontication/Authcontext';
import toast from 'react-hot-toast';

const Register = () => {

    const { signupWithEmailAndPassword, signOutUser, updateUserProfile, setUser, user } = useContext(AuthContext);

    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const name = form.name.value
        const photo = form.photoURL.value
        const password = form.password.value

        // console.log(name, email, photoURL, password);
        if (!name) return toast.error('Please enter your Name')
        if (!photo) return toast.error('Please enter your PhotoURL')
        try {
            const result = await signupWithEmailAndPassword(email, password)
            console.log(result.user);
            signOutUser()
            await updateUserProfile(name, photo)
            setUser({ ...result.user, photoURL: photo, displayName: name })
            toast.success("signup Successful! now login to your account")
            navigate('/login')
        }
        catch (error) {
            toast.error(error?.message)
            console.log(error?.message);
        }
    }

    if (user) {
        navigate('/')
    }

    return (
        <div className="hero bg-base-200 min-h-screen flex items-center justify-center">
            <div className="hero-content flex-col gap-20 lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie className='w-96' animationData={signupAnimation}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl mb-7 font-bold">Signup now!</h1>
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
                        <p>Already have an account? <Link to={'/login'}><span className='font-bold underline'>Login</span></Link> Now.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;