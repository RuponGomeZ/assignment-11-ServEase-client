import React from 'react';
import Lottie from 'lottie-react';
import error from '../assets/404.json';
import { Link } from 'react-router-dom';

const ErrorComponent = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <Lottie className="w-96" animationData={error} />
            <div className='mt-4'>
                <button className="btn btn-neutral">
                    <Link to="/"> Go Back Home</Link>
                </button>
            </div>
        </div>
    );
};

export default ErrorComponent;