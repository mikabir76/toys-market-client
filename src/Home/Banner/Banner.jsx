import React from 'react';
import { BiSearch } from "react-icons/bi";
const Banner = () => {
    return (
        <div className='grid md:grid-cols-2 bg-[#E8F7FF] p-12 gap-x-6 justify-center items-center'>
            <div className='space-y-7'>
                <h1 className='text-5xl font-bold'>Better Kids, <br />Better World</h1>
                <h3 className='text-gray-400'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Alias mollitia sunt est maiores <br /> perspiciatis libero nostrum eaque ab necessitatibus harum?</h3>
                <button className='bg-gradient-to-r from-[#6D74E4] to-[#848FFF] py-2 px-4 rounded-md text-xl text-white' data-aos="zoom-in"
                data-aos-duration="3000">Shop Now</button>
                <div>
                    <h1 className='text-4xl font-bold mb-4'>Shop by Age</h1>
                    <div className='flex justify-evenly me-24'>
                        <p className='bg-gray-200 rounded-lg px-2 text-gray-700'>0-12 Months</p>
                        <p className='bg-gray-200 rounded-lg px-2 text-gray-700'>1-5 Years</p>
                        <p className='bg-gray-200 rounded-lg px-2 text-gray-700'>6-10 Years</p>
                        <p className='bg-gray-200 rounded-lg px-2 text-gray-700'>Older Kids</p>
                        <span className='bg-[#6D74E4] flex items-center rounded-lg me-16 shadow-inner'><BiSearch className='text-xl text-white'></BiSearch></span>
                        
                    </div>
                </div>
            </div>
            <div>
                <img className='w-3/4' src="https://img.freepik.com/free-vector/illustration-sport-concept-isometric-graphic_1375-283.jpg?w=740&t=st=1684427449~exp=1684428049~hmac=8b1422bb4ec6c039ad61a27891bb8fd861bea804aed5c2db7c035a0ae528b493" alt="" />
            </div>
        </div>
    );
};

export default Banner;