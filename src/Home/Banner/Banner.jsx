import React from 'react';

const Banner = () => {
    return (
        <div className='grid md:grid-cols-2 bg-[#E8F7FF] p-12 gap-x-6 justify-center items-center'>
            <div className='space-y-7'>
                <h1 className='text-5xl font-bold'>Better Kids, <br />Better World</h1>
                <h3 className='text-gray-400'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Alias mollitia sunt est maiores <br /> perspiciatis libero nostrum eaque ab necessitatibus harum?</h3>
                <button className='bg-gradient-to-r from-[#6D74E4] to-[#848FFF] py-2 px-4 rounded-md text-xl text-white'>Shop Now</button>
            </div>
            <div>
                <img className='w-3/4' src="https://img.freepik.com/free-vector/illustration-sport-concept-isometric-graphic_1375-283.jpg?w=740&t=st=1684427449~exp=1684428049~hmac=8b1422bb4ec6c039ad61a27891bb8fd861bea804aed5c2db7c035a0ae528b493" alt="" />
            </div>
        </div>
    );
};

export default Banner;