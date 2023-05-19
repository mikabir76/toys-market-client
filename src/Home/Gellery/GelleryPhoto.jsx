import React from 'react';

const GelleryPhoto = ({ photo }) => {
    const {img, title} = photo
    console.log(photo)
    return (
        <div className=" w-80 relative my-0 cursor-pointer" >
            <figure className="pt-2">
                <img src={img} alt="Shoes" className="rounded-xl mt-0 border-2 w-72 h-48" />
            </figure>
            <div className="absolute hover:bg-gradient-to-r from-[#333333] to-[rgba(21, 21, 21, 0)] w-72 h-48 transform -translate-y-1/2 rounded-xl top-1/2 mt-1">
                    <div className='text-white flex mt-36 pl-5'>
                        <h1 className=' text-2xl px-4 rounded-full shadow-2xl font-mono font-thin bg-blue-800'>{title}</h1>
                    </div>
                </div>
        </div>
    );
};

export default GelleryPhoto;

// bg-gradient-to-r from-[#7b7b7b] to-[rgba(21, 21, 21, 0)]