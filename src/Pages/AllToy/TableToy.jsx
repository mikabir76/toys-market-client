import React from 'react';

const TableToy = ({toy}) => {
    console.log(toy)
    const {photo, name, price, quantity, category} = toy;
    return (
        <tr className='hover'>
        <td className='text-xl'>
        <div className="avatar">
              <div className="mask mask-squircle w-28 border-2  h-28">
                <img src={photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
        </td>
        <td className='text-xl'>{name}</td>
        <td className='text-xl'>{quantity}</td>
        <td className='text-xl'>{'$' + price}</td>
        <td className='text-xl'>{category}</td>
        <td className='text-xl'>
        <button className='bg-gradient-to-r from-[#6D74E4] to-[#848FFF] py-2 px-4 rounded-md text-xl text-white'>View Details</button>

        </td>
    </tr>
    );
};

export default TableToy;