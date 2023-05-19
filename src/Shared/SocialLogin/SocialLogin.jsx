import React, { useContext } from 'react';
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';
import Swal from 'sweetalert2'
const SocialLogin = () => {
  const {googleLogin} = useContext(AuthContext)

  const handleGoogleLogin = ()=>{
    googleLogin()
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser)
      if(loggedUser){
        Swal.fire({
            title: 'success',
            text: 'Google Login successfully ',
            icon: 'success',
            confirmButtonText: 'Confirm'
          })
    }
    })
    .catch(error =>{
      console.log(error)
    })
  }
    return (
        <div className="flex w-full">
        <div onClick={handleGoogleLogin} className="grid h-16 flex-grow card  rounded-box place-items-center"><button><FaGoogle className='text-3xl text-green-800'></FaGoogle></button></div>
        <div className="divider divider-horizontal"></div>
        <div className="grid h-16 flex-grow card rounded-box place-items-center"><FaFacebook className='text-4xl text-blue-800'></FaFacebook></div>
      </div>
    );
};

export default SocialLogin;