import React, { useEffect, useState } from 'react';
import { dynamicTitle } from '../../GenneralFunction/GenneralFunction';
import TableToy from './TableToy';

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
            <h1 className='text-5xl text-center py-16'>All Toy</h1>
            <div className="overflow-x-auto py-4">
                <table className="table table-compact w-full bg-[#E8F7FF]">
                    <thead className=''>
                        <tr>
                            <th className='text-2xl'>Image</th>
                            <th className='text-2xl'>Name</th>
                            <th className='text-2xl'>Quantity</th>
                            <th className='text-2xl'>Price</th>
                            <th className='text-2xl'>Category</th>
                            <th className='text-2xl'>Details</th>
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
        </div>
    );
};

export default AllToy;