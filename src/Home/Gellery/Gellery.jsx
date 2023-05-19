import React, { useEffect, useState } from 'react';
import GelleryPhoto from './GelleryPhoto';

const Gellery = () => {
    const [gellery, setGellery] = useState([]);
    useEffect(()=>{
        fetch('gellery.json')
        .then(res => res.json())
        .then(data =>{
           setGellery(data)
        })
    },[])
    return (
        <div className='bg-[#E8F7FF] p-12 '>
            <h1 className='text-4xl font-bold text-center my-8'>All New <span className='underline'>Featured</span> items <br />in our Tukutoys inspirations gallery</h1>
            <div className='grid gird-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 w-full mx-auto '>
            {
                gellery.map(photo => <GelleryPhoto
                key={photo.id}
                photo={photo}
                ></GelleryPhoto>)
            }
            </div>
        </div>
    );
};

export default Gellery;