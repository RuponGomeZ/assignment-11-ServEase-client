import React, { useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import AuthContext from '../Authontication/Authcontext';
import toast, { Toaster } from 'react-hot-toast';
import ToggleTheme from './ToggleTheme';

const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext)
    const location = useLocation()

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                toast.error('logged out successfully')
                // console.log('logged out successfully');
            })
    }

    const links = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/allServices">Services</NavLink></li>
            <li>  {user?.email && (
                <li className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost m-1">Dashboard</label>
                    <ul tabIndex={0} className="menu w-40 items-center gap-2 bg-gray-400 dropdown-content">
                        <li><NavLink to="/addService">Add Service</NavLink></li>
                        <li><NavLink to="/manageService">Manage Service</NavLink></li>
                        <li><NavLink to="/bookedServices">Booked-Services</NavLink></li>
                        <li><NavLink to="/servicesToDo">Service-To-Do</NavLink></li>
                    </ul>
                </li>
            )}</li>
            <li className='block lg:hidden'>{
                user ? <button onClick={handleSignOut}>Logout</button> : <Link to={'/login'}>Login</Link>
            }</li>
        </>
    );


    return (
        <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost text-xl">ServEase</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 items-center">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <ToggleTheme></ToggleTheme>
                <a className="font-bold underline">{user?.displayName}</a>
                {
                    user ? (
                        <button className='hidden lg:block' onClick={handleSignOut}>Logout</button>
                    ) : (location.pathname === '/login' ? (
                        <Link to="/register">Register</Link>
                    ) : (
                        <Link to="/login">Login</Link>
                    )
                    )
                }
            </div>
            <Toaster />
        </div>
    );
};

export default Navbar;