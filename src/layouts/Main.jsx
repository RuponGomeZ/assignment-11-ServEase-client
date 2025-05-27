import React from 'react';
import Navbar from '../componenets/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../componenets/Footer';

const Main = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar></Navbar>
            {/* Outlet */}
            <div className='w-11/12 mx-auto min-h-screen'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;