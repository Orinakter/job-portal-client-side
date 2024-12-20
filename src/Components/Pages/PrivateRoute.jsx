import React, { useContext } from 'react';
import { authorizedContext } from '../AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(authorizedContext)
    const location = useLocation()
    console.log(location);

    if (loading){
        return <span className="loading loading-spinner text-neutral"></span>
    }
    if(user){
        return children
    }

    return <Navigate to="/login" state={location?.pathname}></Navigate>
        
    
};

export default PrivateRoute;