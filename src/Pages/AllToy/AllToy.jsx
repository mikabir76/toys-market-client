import React, { useEffect, useState } from 'react';
import { dynamicTitle } from '../../GenneralFunction/GenneralFunction';
import TableToy from './TableToy';
import { ImSearch } from "react-icons/im";


const AllToy = () => {
    dynamicTitle('All Toys - Tukutoys')
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/addToys')
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [])
    return (
        <div className='bg-[#E8F7FF]'>
           <div>
            <div className='w-full ml-60'>
                <input className='p-4 border-2 rounded-lg w-2/4 mt-12' placeholder='Search' type="text" name="search" id="" />
                <button className='bg-gradient-to-r from-[#6D74E4] to-[#848FFF] py-5 rounded-e-md  px-4  text-xl text-white'> <ImSearch className='text-2xl'></ImSearch> </button>
            </div>
           </div>
            <h1 className='text-5xl text-center py-16'>All Toy</h1>
            <table className=" w-[90%] mx-auto bg-[#E8F7FF]">
                <thead className='text-left hover:bg-[#daeef9] '>
                    <tr className=''>
                        <th className='text-xl'>Seller Name</th>
                        <th className='text-xl'>Name</th>
                        <th className='text-xl'>Quantity</th>
                        <th className='text-xl'>Price</th>
                        <th className='text-xl'>Category</th>
                        <th className='text-xl'>Details</th>
                    </tr>
                </thead>
                <tbody className='bg-[#E8F7FF]'>
                    {
                        toys.map(toy => <TableToy
                            key={toy._id}
                            toy={toy}
                        ></TableToy>)
                    }
                </tbody>

            </table>

        </div>
    );
};

export default AllToy;