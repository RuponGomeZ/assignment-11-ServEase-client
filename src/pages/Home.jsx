import React from 'react';
import Banner from './Banner';

const Home = () => {
    return (
        <div className=' mt-32'>
            <h2 className='text-center  font-bold text-4xl mb-7'>Few Services Done by our clients</h2>
            <div className=' mx-auto flex items-center justify-center'>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;