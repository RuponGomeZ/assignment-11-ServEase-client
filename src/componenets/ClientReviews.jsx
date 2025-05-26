import React from 'react';

import person1 from '../assets/person1.webp'
import person2 from '../assets/person2.avif'
import person3 from '../assets/person3.webp'

const ClientReviews = () => {
    return (
        <div>
            <h2 className='text-center font-bold text-4xl my-10 mt-40'>Some Reviews Given By our Clients </h2>
            <div className='flex flex-col lg:flex-row gap-16 justify-center items-center'>
                {/* Review 1 */}
                <div className='w-72 items-center bg-blue-200 text-white p-5 rounded-lg'>
                    <img className='w-40 mx-auto rounded-full  border-white border-2 ' src={person1} alt="" />
                    <div className='border-white bg-black rounded-lg border-2 p-5 mt-4'>
                        <h4 className='font-bold text-lg text-center'>Jhonkar Mahbub</h4>
                        <p>Rating: <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" defaultChecked />
                        </div></p>
                        <p className='mt-2'><span className='font-bold'>ServEase</span> Provided the best solutions of my wall repair. Totally satisfied</p>
                    </div>
                </div>
                {/* Review 2 */}
                <div className='w-72 items-center bg-blue-200 text-white p-5 rounded-lg'>
                    <img className='w-40 mx-auto rounded-full  border-white border-2' src={person2} alt="" />
                    <div className='border-white bg-black rounded-lg border-2 p-5 mt-4'>
                        <h4 className='font-bold text-lg text-center'>Maria </h4>
                        <p>Rating: <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" defaultChecked />
                        </div></p>
                        <p className='mt-2'><span className='font-bold'>ServEase</span> Provided the best solutions of my wall repair. Totally satisfied</p>
                    </div>
                </div>
                {/* Review 3 */}
                <div className='w-72 items-center bg-blue-200 text-white p-5 rounded-lg'>
                    <img className='w-40 mx-auto rounded-full  border-white border-2' src={person3} alt="" />
                    <div className='border-white bg-black rounded-lg border-2 p-5 mt-4'>
                        <h4 className='font-bold text-lg text-center'>Alex Dominic</h4>
                        <p>Rating: <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" defaultChecked />
                        </div></p>
                        <p className='mt-2'><span className='font-bold'>ServEase</span> Provided the best solutions of my wall repair. Totally satisfied</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientReviews;