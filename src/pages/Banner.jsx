import React from 'react';
import cleaner from '../assets/cleaning (1).jpg'
import cleaner2 from '../assets/cleaning (2).jpg'
import cleaner3 from '../assets/cleaning (3).jpg'
import cleaner4 from '../assets/cleaning (4).jpg'
import cleaner5 from '../assets/cleaning (5).jpg'

const Banner = () => {
    return (
        <div className="flex justify-center items-center w-full">
            <div className="carousel rounded-box w-full sm:w-3/4 lg:w-2/4 mx-auto container">
                <div className="carousel-item">
                    <img className='h-[400px] bg-gray-300 p-1' src={cleaner} alt="cleaner" />
                </div>
                <div className="carousel-item">
                    <img className='h-[400px] bg-gray-300 p-1' src={cleaner2} alt="cleaner" />
                </div>
                <div className="carousel-item">
                    <img className='h-[400px] bg-gray-300 p-1' src={cleaner3} alt="cleaner" />
                </div>
                <div className="carousel-item">
                    <img className='h-[400px] bg-gray-300 p-1' src={cleaner4} alt="cleaner" />
                </div>
                <div className="carousel-item">
                    <img className='h-[400px] bg-gray-300 p-1' src={cleaner5} alt="cleaner" />
                </div>
            </div>
        </div>
    );
};

export default Banner;