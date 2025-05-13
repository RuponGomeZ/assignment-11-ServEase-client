import React from 'react';
import Navbar from '../componenets/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar></Navbar>
            {/* Outlet */}
            <div className='w-11/12 mx-auto min-h-screen'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;