import React from 'react';

const TableToy = ({toy}) => {
    // console.log(toy)
    const {photo, name, price, quantity, category, seller} = toy;
    return (
        <tr className='hover:bg-[#daeef9] border-2'>
        <td className=''>
        {seller}
        </td>
        <td className=''>{name}</td>
        <td className=''>{quantity}</td>
        <td className=''>{'$' + price}</td>
        <td className=''>{category}</td>
        <td className=''>
        <button toy={toy} className='btn-style'>View Details</button>

        </td>
    </tr>
    );
};

export default TableToy;