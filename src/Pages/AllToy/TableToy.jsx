import React from 'react';
import { Link } from 'react-router-dom';

const TableToy = ({ toy }) => {
    // console.log(toy)
    const {_id, photo, name, price, quantity, category, seller } = toy;
    return (
        <tr className='hover:bg-[#daeef9] border-2'>
            <td className=''>
            <div className="avatar">
                    <div className="w-28 rounded-xl">
                        <img src={photo} />
                    </div>
                </div>
            </td>
            <td className=''>
                {seller}
            </td>
            <td className=''>{name}</td>
            <td className=''>{quantity}</td>
            <td className=''>{'$' + price}</td>
            <td className=''>{category}</td>
            <td className=''>
                <Link to={`/details/${_id}`}><button toy={toy} className='btn-style'>View Details</button></Link>

            </td>
        </tr>
    );
};

export default TableToy;