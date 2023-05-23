import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { dynamicTitle } from '../../GenneralFunction/GenneralFunction';
const Details = () => {
    dynamicTitle('Details - Tukutoys')
    const details = useLoaderData();
    const {price, ratting, description, name, seller, photo, email, category, quantity} = details;
    // console.log(details)
    return (
        <div className="card card-compact w-full bg-[#E8F7FF] shadow-xl py-24">
      <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
      <div className='ml-48'>
      <div className="avatar">
  <div className="w-80 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={photo}/>
  </div>
</div>
<p className='ml-28 pt-4 flex items-center text-2xl'><Rating style={{ maxWidth: 100 }} readOnly value={ratting} />{ratting}</p>
       </div>
        <div className='space-y-2'>
            <h1 className='text-2xl'><span className='underline font-semibold'>Seller Name:</span> {seller}</h1>
            <h1 className='text-2xl'><span className='underline font-semibold'>Seller Email:</span> {email}</h1>
            <h1 className='text-2xl'><span className='underline font-semibold'>Toy Name:</span> {name}</h1>
            <h1 className='text-2xl'><span className='underline font-semibold'>Sub-Category:</span> {category}</h1>
            <p className='text-2xl'><span className='underline font-semibold'>Price:</span> ${price}</p>
            <p className='text-2xl'><span className='underline font-semibold'>Available Quantity:</span> {quantity}</p>
            <p className='text-2xl'><span className='underline font-semibold'>Description:</span> {description}</p>
        </div>
      </div>
      <div className='flex justify-center'>
      <Link to='/'><button className='btn-style flex items-center  text-xl font-semibold'> <BsFillArrowLeftCircleFill className='me-2 text-xl'></BsFillArrowLeftCircleFill> Back to Home</button></Link>
      </div>
      </div>
    );
};

export default Details;