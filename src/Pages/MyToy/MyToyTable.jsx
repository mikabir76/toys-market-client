import React, { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Modal from './Modal';
import { Link, useLoaderData } from 'react-router-dom';

const MyToyTable = ({toy, handleDelete}) => {
    const {_id, photo, name, price, quantity, category, seller} = toy;
   const [showModal, setShowModal] = useState(false)
   const handleOnClose = ()=> setShowModal(false)

//    useEffect(()=>{
//     fetch('')
//    },[])
    return (
        <tr className='hover:bg-[#daeef9] border-2'>
            <td>
                <button onClick={()=>handleDelete(_id)} className='bg-blue-100 text-gray-500 p-4 rounded-full'><MdDelete className='text-4xl '></MdDelete></button>
            </td>
        <td className=''>
        <div className="avatar">
              <div className="mask mask-squircle w-24 border-2  h-28">
                <img src={photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
        </td>
        <td>{seller}</td>
        <td className=''>{name}</td>
        <td className=''>{quantity}</td>
        <td className=''>{'$' + price}</td>
        <td className=''>{category}</td>
        <td>
            <Link><button onClick={()=> setShowModal(true)} className='p-4 border-2 bg-blue-100'><FaEdit className='text-2xl'></FaEdit></button></Link>
            <Modal toy={toy} onClose={()=> setShowModal(false)} open={showModal}></Modal>
        </td>
        <td className=''>
        <Link to={`/details/${_id}`}><button className='btn-style'>View Details</button></Link>

        </td>
    </tr>
    );
};

export default MyToyTable;