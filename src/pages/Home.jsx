import React from 'react';
import Banner from './Banner';
import PopularServices from '../componenets/PopularServices';

const Home = () => {
    return (
        <div className=' mt-32'>
            <h2 className='text-center  font-bold text-4xl mb-7'>Few Services Done by our clients</h2>
            <div className=' mx-auto flex items-center justify-center'>
                <Banner></Banner>
            </div>
            <PopularServices></PopularServices>
        </div>
    );
};

export default Home;