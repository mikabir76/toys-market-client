import React, { useEffect, useState } from 'react';

const AllToy = () => {
    const [toys, setToys] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/addToys')
        .then(res => res.json())
        .then(data =>{
            setToys(data)
        })
    },[])
    return (
        <div className='bg-[#E8F7FF]'>
            <h1 className='text-5xl text-center'>All Added Toy</h1>

        </div>
    );
};

export default AllToy;