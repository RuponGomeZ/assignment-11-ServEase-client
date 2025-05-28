import React, { useEffect } from 'react';
import Banner from './Banner';
import PopularServices from '../componenets/PopularServices';
import ClientReviews from '../componenets/ClientReviews';
import { easeInOut, motion } from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';
import PageTitle from '../componenets/PageTitle';
const Home = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <div className=' mt-32' data-aos="fade-left">
            <PageTitle title=""></PageTitle>

            <motion.h2
                className='text-center font-bold text-4xl mb-7'
                animate={{
                    x: [0, -50, 50, 0],
                }}
                transition={{
                    duration: 10,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'loop',
                }}
            >
                Few Services Done by our clients
            </motion.h2>
            <div className=' mx-auto flex items-center justify-center'>
                <Banner></Banner>
            </div>
            <div >
                <PopularServices></PopularServices>
            </div>

            <div>
                <h2 className='text-center font-bold text-4xl my-10 mt-40' data-aos="fade-right"><motion.span animate={{ x: [0, -50, 50, 0], }}
                    transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop' }}
                >In Our 5 Years</motion.span>
                    <motion.span animate={{ x: [0, -10, -10, 0], }}
                        transition={{ duration: 10, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop' }}
                    >Of Journey We Have</motion.span>
                </h2>

                <div className='flex flex-col lg:flex-row gap-10 justify-center  items-center text-white'>
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