import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../Authontication/Authcontext';
import toast, { Toaster } from 'react-hot-toast';

const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext)

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                toast.error('logged out successfully')
                // console.log('logged out successfully');
            })
    }

    const links = (
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/allService">Services</Link></li>
            {user?.email && (
                <li>
                    <details className="dropdown">
                        <summary className="btn btn-ghost">Dashboard</summary>
                        <ul className="menu w-40 items-center gap-2 bg-gray-800 dropdown-content">
                            <li><Link to="/addService">Add Service</Link></li>
                            <li><Link to="/manageService">Manage Service</Link></li>
                            <li><Link to="/bookedServices">Booked-Services</Link></li>
                            <li><Link to="/servicesToDo">Service-To-Do</Link></li>
                        </ul>
                    </details>
                </li>
            )}
        </>
    );


    return (
        <div className="navbar bg-base-100 shadow-sm">
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
                <a className="btn btn-ghost text-xl">ServEase</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <a className="font-bold underline">{user?.displayName}</a>
                {
                    user ? <button onClick={handleSignOut}>Logout</button> : <Link to={'/login'}>Login</Link>
                }
            </div>
            <Toaster />
        </div>
    );
};

export default Navbar;