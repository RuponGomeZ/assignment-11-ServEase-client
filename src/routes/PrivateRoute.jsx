import React, { useContext } from 'react';
import AuthContext from '../Authontication/Authcontext';
import { Navigate, useLocation } from 'react-router-dom';
import LoadinSpinner from '../componenets/LoadinSpinner';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) return <LoadinSpinner />
    if (user) return children
    return <Navigate to='/login' state={location.pathname} />
};

export default PrivateRoute;