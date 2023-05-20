import React from 'react';
import cricket from '../../assets/cricket.jpg'
import football from '../../assets/football.jpg'
import basketball from '../../assets/basketball.jpg'
import hocky from '../../assets/hocky.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const BestToy = () => {
    return (
       <div className='bg-[#E8F7FF] '>
        <h1 className='text-4xl text-center font-bold'>Our Best Collection</h1>
         <div className=' grid grid-cols-1 md:grid-cols-2 items-center py-16'>
            <div className='grid grid-cols-2 w-[65%]  ml-40'>
            <img data-aos="zoom-in" data-aos-duration="1000" className='w-48 h-36 mb-3 border-x-2 m-none' src={cricket} alt="" />
            <img data-aos="zoom-in" data-aos-duration="1000" className='w-48 h-36 mb-3 border-x-2 m-none' src={football} alt="" />
            <img data-aos="zoom-in" data-aos-duration="1000" className='w-48 h-36 mb-3 border-x-2 m-none' src={basketball} alt="" />
            <img data-aos="zoom-in" data-aos-duration="1000" className='w-48 h-36 mb-3 border-x-2 m-none' src={hocky} alt="" />
            </div>
            <div className='pe-24'>
                <h1 className='text-4xl font-bold mb-4'>Popular and Trending Selling Toys</h1>
                <div className='grid grid-cols-2 '>
                    <div>
                        <p className='text-3xl font-bold'>5.4m</p>
                        <p><small className='text-gray-400'>Sell Toys</small></p>
                    </div>
                    <div>
                        <p className='text-3xl font-bold'>1.4m</p>
                        <p><small className='text-gray-400'>Achieve Customers</small></p>
                    </div>
                    <button className='bg-gradient-to-r from-[#6D74E4] to-[#848FFF] py-2 w-32 mt-4 rounded-md text-xl text-white'>Shop Now</button>
                </div>
            </div>
        </div>
       </div>
    );
};

export default BestToy;