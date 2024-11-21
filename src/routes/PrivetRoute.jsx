import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import Loading from '../Components/Pages/Loading';

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <Loading></Loading>
    }

    if(user && user?.email){
        return children;
    }

    return (
        <Navigate to={'/auth/login'}></Navigate>
    );
};

export default PrivetRoute;