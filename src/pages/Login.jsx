import Lottie from 'lottie-react';
import { Link, useNavigate } from 'react-router-dom';
import loginAnimation from '../assets/loginAnimation.json'
import { useContext } from 'react';
import AuthContext from '../Authontication/Authcontext';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {

    const navigate = useNavigate()

    const { loginUser, googleLogin } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value

        console.log(email, password);
        loginUser(email, password)
            .then(result => {
                navigate('/')
                // console.log(result.user);
                toast.success(`Logged in as ${result.user.displayName}`)
            })
            .catch(error => {
                toast.error(error?.message)
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                navigate('/')
                toast.success(`Logged in as ${result.user.displayName}`)
            })
            .catch(error => {
                toast.error(error?.message)
                // console.log(error.message);
            })
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen flex items-center justify-center">
                <div className="hero-content flex-col gap-20 lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <Lottie animationData={loginAnimation}></Lottie>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1 className="text-5xl mb-7 font-bold">Login now!</h1>
                            <form onSubmit={handleSubmit} className="fieldset">
                                <label className="label">Email</label>
                                <input name='email' type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input name='password' type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </form>
                            <button onClick={handleGoogleLogin} className='bg-red-500 hover:bg-red-700 p-2 mx-auto flex items-center gap-2 px-4 rounded-md font-bold'><FaGoogle />Login With Google</button>
                            <p>Don't have an account? <Link to={'/register'}><span className='font-bold underline'>Register</span></Link> Now.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;