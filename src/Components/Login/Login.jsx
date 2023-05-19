import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';

const Login = () => {
    return (

        <div className='w-full  items-center bg-[#E8F7FF] p-12 '>
            
            <form className=' w-1/2 mx-auto p-12'>
            <h1 className='text-center text-5xl font-semibold my-8'>Login</h1>
                {/* <img className='w-full h-96' src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?size=626&ext=jpg&ga=GA1.2.1654759242.1680368383&semt=sph" alt="" /> */}
                <div className="card-body p-5 rounded-lg shadow-2xl hover:bg-[#d5e7f1] ">
                
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered hover:bg-blue-100  w-full" />
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered hover:bg-blue-100 w-full" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6 ">
                        <button className="bg-gradient-to-r from-[#6D74E4] to-[#848FFF] py-2 px-4 rounded-md text-xl text-white w-full">Login</button>
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