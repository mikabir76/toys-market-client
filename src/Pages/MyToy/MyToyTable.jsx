import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Modal from './Modal';

const MyToyTable = ({toy, handleDelete}) => {
    const {_id, photo, name, price, quantity, category, seller} = toy;
   const [showModal, setShowModal] = useState(false)
   const handleOnClose = ()=> setShowModal(false)

 
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
            <button onClick={()=> setShowModal(true)} className='p-4 border-2 bg-blue-100'><FaEdit className='text-2xl'></FaEdit></button>
            <Modal onClose={handleOnClose} visible={showModal}></Modal>
        </td>
        <td className=''>
        <button toy={toy} className='bg-gradient-to-r from-[#6D74E4] to-[#848FFF] py-2 px-4 rounded-md text-xl text-white'>View Details</button>

        </td>
    </tr>
    );
};

export default MyToyTable;