import React from 'react';

import person1 from '../assets/person1.webp'
import person2 from '../assets/person2.avif'
import person3 from '../assets/person3.webp'

const ClientReviews = () => {
    return (
        <div>
            <h2>Some Reviews Given By our Clients </h2>
            <div className='flex gap-16 justify-center'>
                {/* Review 1 */}
                <div className='w-72 items-center bg-gray-500 p-5'>
                    <img className='w-40 mx-auto rounded-full  border-white border-2' src={person1} alt="" />
                    <div className='border-white border-2 p-5 mt-4'>
                        <h4 className='font-bold text-lg text-center'>Alex Dominic</h4>
                        <p>Rating: <div className="rating ml-1">
                            <div className="mask mask-star" aria-label="1 star"></div>
                            <div className="mask mask-star" aria-label="2 star"></div>
                            <div className="mask mask-star" aria-label="3 star" aria-current="true"></div>
                            <div className="mask mask-star" aria-label="4 star"></div>
                            <div className="mask mask-star" aria-label="5 star"></div>
                        </div></p>
                        <p className='mt-2'><span className='font-bold'>ServEase</span> Provided the best solutions of my wall repair. Totally satisfied</p>
                    </div>
                </div>
                {/* Review 2 */}
                <div className='w-72 items-center bg-gray-500 p-5'>
                    <img className='w-40 mx-auto rounded-full  border-white border-2' src={person2} alt="" />
                    <div className='border-white border-2 p-5 mt-4'>
                        <h4 className='font-bold text-lg text-center'>Alex Dominic</h4>
                        <p>Rating: <div className="rating ml-1">
                            <div className="mask mask-star" aria-label="1 star"></div>
                            <div className="mask mask-star" aria-label="2 star"></div>
                            <div className="mask mask-star" aria-label="3 star" aria-current="true"></div>
                            <div className="mask mask-star" aria-label="4 star"></div>
                            <div className="mask mask-star" aria-label="5 star"></div>
                        </div></p>
                        <p className='mt-2'><span className='font-bold'>ServEase</span> Provided the best solutions of my wall repair. Totally satisfied</p>
                    </div>
                </div>
                {/* Review 3 */}
                <div className='w-72 items-center bg-gray-500 p-5'>
                    <img className='w-40 mx-auto rounded-full  border-white border-2' src={person3} alt="" />
                    <div className='border-white border-2 p-5 mt-4'>
                        <h4 className='font-bold text-lg text-center'>Alex Dominic</h4>
                        <p>Rating: <div className="rating ml-1">
                            <div className="mask mask-star" aria-label="1 star"></div>
                            <div className="mask mask-star" aria-label="2 star"></div>
                            <div className="mask mask-star" aria-label="3 star" aria-current="true"></div>
                            <div className="mask mask-star" aria-label="4 star"></div>
                            <div className="mask mask-star" aria-label="5 star"></div>
                        </div></p>
                        <p className='mt-2'><span className='font-bold'>ServEase</span> Provided the best solutions of my wall repair. Totally satisfied</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientReviews;