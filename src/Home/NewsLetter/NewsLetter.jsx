import React from 'react';

const NewsLetter = () => {
    return (
        <div className='bg-[#E8F7FF]'>
           <div className='bg-[#82EFFF] w-3/4 mx-auto p-8 rounded-2xl'>
            <h1 className='text-5xl mb-4 font-bold text-center'>Subscribe Newsletter</h1>
            <p className='text-gray-400 text-center mb-4'>Keep our Customer Satisfiction. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi eum, <br /> ab rem delectus earum qui.  Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
            <div className=" relative w-full ml-52">
   <input type="text" name="" className='input input-bordered rounded-lg w-2/4 h-20' id="" />
    <div className="absolute transform -translate-y-1/2 left-80 top-1/2">
      <button className='btn-style'>Subscribe</button>
    </div>
  </div> 
            </div> 
        </div>
    );
};

export default NewsLetter;