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

    const links = [
        <div className='flex gap-5 items-center'>
            <Link to={'/'} key={"home"}>Home</Link>
            <Link to={'/allService'} key={"services"}>Services</Link>
            {user?.email && (
                < div key={'dashboard'}>
                    <details className="dropdown">
                        <summary className="btn btn-ghost">Dashboard</summary>
                        <div className="menu w-40 items-center gap-2 bg-gray-800 dropdown-content  ">
                            <Link to={'/addService'} key={"addServices"}>Add Service</Link>
                            <Link to={'/manageService'} key="manageService">Manage Service</Link>
                            <Link to='' key="bookedServices">Booked-Services</Link>
                            <Link to='' key="serviceToDo">Service-To-Do</Link>
                        </div>
                    </details>
                </div>)}
        </div >
    ]

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