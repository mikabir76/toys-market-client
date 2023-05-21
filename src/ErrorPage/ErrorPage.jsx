import React from 'react';
import { Link } from 'react-router-dom';
import { dynamicTitle } from '../GenneralFunction/GenneralFunction';

const ErrorPage = () => {
    dynamicTitle('Page not found')
    return (
        <div>
            <img className='w-3/4 mx-auto' src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg?size=626&ext=jpg&ga=GA1.1.1654759242.1680368383&semt=ais" alt="" />
            <div className='text-center space-y-4'>
            <p className='text-5xl font-bold'>Opps!</p>
            <h6 className='text-3xl font-semibold mb-4'>Page not found</h6>
            <Link to='/'><button className='bg-gradient-to-r from-[#6D74E4] to-[#848FFF] hover:bg-gradient-to-l from-[#6D74E4] to-[#848FFF] py-2 px-4 rounded-md text-xl text-white mt-4'>Back to home</button></Link>
            </div>
            
        </div>
    );
};

export default ErrorPage;