import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { BiError } from "react-icons/bi";
import Swal from 'sweetalert2'
import { dynamicTitle } from '../../GenneralFunction/GenneralFunction';
const Register = () => {
    dynamicTitle('Register - Tukutoys')
    const [error, setError] = useState('')
    // const [success, setSuccess] = useState('')
    const {createUser, profileUpdate} = useContext(AuthContext);
    console.log(createUser)

    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)
        setError('')
        if(!/(?=.*[A-Z])/.test(name)){
            setError('Name at least one uppercase')
        }
       else if(!/(?=.*[A-Z])/.test(password)){
             setError('Password at least one uppercase letter!')
            return;
        }
        else if(!/(?=.*[!@#$&*])/.test(password)){
            setError('Password at least one Special Character')
            return
        }
        else if(password.length <6){
            setError('Password length at least 6 Character')
            return
        }
        createUser(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            if(loggedUser){
                Swal.fire({
                    title: 'success',
                    text: 'Your Register has been successfully ',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
            userUpdate(loggedUser, name, photo)
            form.reset()
        })
        .catch(error =>{
            setError(error.message)   
        })
        
    }

    const userUpdate = (user, name, photo)=>{
        profileUpdate(user, {
            displayName: name,
            photoURL: photo
        })
        .then(() => {
           
          }).catch((error) => {
            console.log(error.message)
          });
    
    }
    return (
        <div className='w-full items-center bg-[#E8F7FF] p-4 '>
            
        <form onSubmit={handleRegister} className=' w-1/2 mx-auto p-8'>
        <h1 className='text-center text-5xl font-semibold my-8'>Register</h1>
            <div className="card-body p-5 rounded-lg shadow-2xl hover:bg-[#d5e7f1] ">
            {error && <p className='text-red-500 text-xl flex items-center font-semibold'><BiError className='text-pink-700 text-2xl'></BiError> <small>{error}</small></p>}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Name</span>
                    </label>
                    <input type="text" placeholder="Name" name='name' className="input input-bordered hover:bg-blue-100  w-full" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Photo URL</span>
                    </label>
                    <input type="text" placeholder="Photo" name='photo' className="input input-bordered hover:bg-blue-100  w-full" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Email</span>
                    </label>
                    <input type="email" placeholder="email" name='email' className="input input-bordered hover:bg-blue-100  w-full" required />
                </div>
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Password</span>
                    </label>
                    <input type="password" placeholder="password" name='password' className="input input-bordered w-full" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6 ">
                    <button className="bg-gradient-to-r from-[#6D74E4] to-[#848FFF] py-2 px-4 rounded-md text-xl text-white w-full" required>Register</button>
                </div>
                <div>
                    <h1 className='text-center my-4'>All Ready Have an Account? <Link to='/login'>Login</Link></h1>
                </div>
                <SocialLogin></SocialLogin>
            </div>
        </form>
    </div>
    );
};

export default Register;