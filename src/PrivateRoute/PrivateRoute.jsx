import React, { useContext } from 'react';
import { AuthContext } from '../Components/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

        if(loading){
            return <progress className="progress w-56 text-center"></progress>
        }

        if(user){
            return children
        }
   
        else if(!user){
            Swal.fire({
                title: 'Warning',
                text: 'You have to log in first to view details',
                icon: 'warning',
                confirmButtonText: 'Ok'
              })
              return <Navigate to='/login' state={{from: location}} replace></Navigate>
        }
   
};

export default PrivateRoute;