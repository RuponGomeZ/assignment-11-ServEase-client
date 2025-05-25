import React from 'react';
import Banner from './Banner';
import PopularServices from '../componenets/PopularServices';
import ClientReviews from '../componenets/ClientReviews';

const Home = () => {
    return (
        <div className=' mt-32'>
            <h2 className='text-center  font-bold text-4xl mb-7'>Few Services Done by our clients</h2>
            <div className=' mx-auto flex items-center justify-center'>
                <Banner></Banner>
            </div>
            <PopularServices></PopularServices>

            <div>
                <h2 className='text-center font-bold text-4xl my-10 mt-40'>In Our 5 Years Of Journey We Have </h2>

                <div className='flex gap-10 justify-center'>
                    <div className="card w-72 bg-base-100 card-md shadow-sm">
                        <div className="card-body items-center bg-gray-700 rounded-lg">
                            <p className='text-sm font-thin '>COMPLETED OVER </p>
                            <h2 className="card-title text-3xl">2000+</h2>
                            <p className='text-sm font-thin '>PROJECTS</p>
                        </div>
                    </div>
                    <div className="card w-72 bg-base-100 card-md shadow-sm">
                        <div className="card-body items-center bg-gray-700 rounded-lg">
                            <p className='text-sm font-thin '>SERVED OVER </p>
                            <h2 className="card-title text-3xl">300+</h2>
                            <p className='text-sm font-thin '>CLIENTS</p>
                        </div>
                    </div>
                    <div className="card w-72 bg-base-100 card-md shadow-sm">
                        <div className="card-body items-center bg-gray-700 rounded-lg">
                            <p className='text-sm font-thin '>MANAGED </p>
                            <h2 className="card-title text-3xl">1000+</h2>
                            <p className='text-sm font-thin '>RESOURCES</p>
                        </div>
                    </div>
                </div>
            </div>
            <ClientReviews></ClientReviews>
        </div>
    );
};

export default Home;