import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='mt-32'>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
                <aside>
                    <img
                        className="h-10 w-10"
                        style={{ opacity: 0.9, filter: 'brightness(0) invert(1)' }}
                        src="https://img.icons8.com/ios-filled/50/housekeeper-male.png"
                        alt="ServEase Logo"
                    />
                    <p>
                        ServEase
                        <br />
                        Providing reliable Service since 2020
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-2">

                        <a href='https://www.linkedin.com/in/rupongomez/' target="_blank">
                            <FaLinkedin className='h-7 w-10' />

                        </a>
                        <a href='https://facebook.com/rupongomez' target="_blank">
                            <FaFacebook className='h-7 w-10' />
                        </a>
                    </div>
                </nav>

            </footer>
            <footer className=" footer sm:footer-horizontal footer-center bg-neutral text-neutral-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;