import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const PrivateRoute = ({children}) => {
    let location = useLocation();
    const {user, loading} = useContext(AuthContext)
   
    if(loading){
        return <div className='min-h-[90vh] flex items-center justify-center'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
        </div>
    }

    if(user && user?.uid){
        return children
    }
   return <Navigate to='/login' state={{from : location}} replace></Navigate>
};

export default PrivateRoute;