import React from 'react';
import { FaFacebook, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div className="flex w-full">
        <div className="grid h-16 flex-grow card  rounded-box place-items-center"><FaGoogle className='text-3xl text-green-800'></FaGoogle></div>
        <div className="divider divider-horizontal"></div>
        <div className="grid h-16 flex-grow card rounded-box place-items-center"><FaFacebook className='text-4xl text-blue-800'></FaFacebook></div>
      </div>
    );
};

export default SocialLogin;