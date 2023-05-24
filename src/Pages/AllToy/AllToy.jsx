import React, { useEffect, useState } from 'react';
import { dynamicTitle } from '../../GenneralFunction/GenneralFunction';
import TableToy from './TableToy';
import { ImSearch } from "react-icons/im";


const AllToy = () => {
    dynamicTitle('All Toys - Tukutoys')
    const [toys, setToys] = useState([]);
    const [asc, setAsc] = useState(true)
    const [searchText, setSearchText] = useState("")
    useEffect(() => {
        fetch(`http://localhost:5000/addToys?sort=${asc? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [asc])

    const handleSearchText = () => {
        fetch(`http://localhost:5000/toySearch/${searchText}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }
    return (
        <div className='bg-[#E8F7FF]'>
            <div>
                <div className=" relative w-full ml-72 pt-8">
                    <input onChange={(e) => setSearchText(e.target.value)} type="text" name="" className='input text-xl input-bordered rounded-lg w-2/4 h-20' id="" />
                    <div className="absolute transform -translate-y-1/2 left-[40%] mt-4  top-1/2">
                        <button onClick={handleSearchText} className='btn-style text-xl h-20'>Search Toy</button>
                    </div>
                </div>
                {/* <div className='w-full ml-60'>
                <input onChange={(e)=> setSearchText(e.target.value)} className='p-4 border-2 rounded-lg w-2/4 mt-12' placeholder='Search' type="text" name="search" id="" />
                <button onClick={handleSearchText} className='bg-gradient-to-r from-[#6D74E4] to-[#848FFF] py-5 rounded-e-md  px-4  text-xl text-white'> <ImSearch className='text-2xl'></ImSearch> </button>
            </div> */}
            </div>
            <h1 className='text-5xl text-center py-16'>All Toy</h1>
            <div>
                <h1 className='text-2xl'>Sort by</h1>
               
                <button className='text-xl my-4 bg-purple-500 p-4 rounded-lg text-white font-bold'
                    onClick={()=> setAsc(!asc)}
                >{asc? "Price High to low" : "Price Low to high"}</button>
            </div>
            <table className=" w-full mx-auto bg-[#E8F7FF]">
                <thead className='text-left hover:bg-[#daeef9] '>
                    <tr className=''>
                        <th className='text-xl'>Photo</th>
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