import React from 'react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
// import { BiStar} from "react-icons/bi";
import { BsStarHalf, BsStarFill } from "react-icons/bs";
const Category = ({category}) => {
    // console.log(category)
    const {photo, name, price, ratting} = category || {};
    return (
        <div className=" w-96 bg-base-100 rounded-2xl border-2 border-y-[#6D74E4]">
  <figure className="px-10 pt-10">
    <img  src={photo} alt="Shoes" className="rounded-xl h-48 w-80" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p className='text-xl font-semibold'>${price}</p>
    <div className='flex items-center text-xl'>
    <Rating style={{ maxWidth: 100 }} readOnly value={ratting} />{ratting}
    </div>
    <div className="card-actions">
      <button className="btn-style">View Details</button>
    </div>
  </div>
</div>
    );
};

export default Category;