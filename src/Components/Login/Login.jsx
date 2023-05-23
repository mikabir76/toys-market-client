import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { BiError } from "react-icons/bi";
import Swal from 'sweetalert2'
import { AuthContext } from '../AuthProvider/AuthProvider';
import { dynamicTitle } from '../../GenneralFunction/GenneralFunction';
const Login = () => {
    dynamicTitle('Login - Tukutoys')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const {signIn} = useContext(AuthContext)
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        setError('')
      
        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            if(loggedUser){
                Swal.fire({
                    title: 'success',
                    text: 'Login has been successfully ',
                    icon: 'success',
                    confirmButtonText: 'Confirm'
                  })
            }
            form.reset()
            navigate('/')
        })
        .catch(error =>{
            setError(error.message)   
        })
        
    }
    return (

        <div className='w-full  items-center bg-[#E8F7FF] p-12 '>
            
            <form onSubmit={handleLogin} className=' w-1/2 mx-auto p-12'>
            <h1 className='text-center text-5xl font-semibold my-8'>Login</h1>
                {/* <img className='w-full h-96' src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?size=626&ext=jpg&ga=GA1.2.1654759242.1680368383&semt=sph" alt="" /> */}

                <div className="card-body p-5 rounded-lg shadow-2xl hover:bg-[#d5e7f1] ">
                {error && <p className='text-red-500 text-xl flex items-center font-semibold'><BiError className='text-pink-700 text-2xl'></BiError> <small>{error}</small></p>}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Email</span>
                        </label>
                        <input type="text" placeholder="email" name='email' className="input input-bordered hover:bg-blue-100  w-full" />
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' className="input input-bordered hover:bg-blue-100 w-full" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6 ">
                        <button className="btn-style w-full">Login</button>
                    </div>
                    <div>
                        <h1 className='text-center my-4'
                        >Dosen't Have an Account Yet? <Link to='/register'>Register</Link></h1>
                    </div>
                    <SocialLogin></SocialLogin>
                </div>
            </form>
        </div>

    );
};

export default Login;