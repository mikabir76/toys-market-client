import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';
import MyToyTable from './MyToyTable';
import Swal from 'sweetalert2';

const MyToy = () => {
    const {user} = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);

    const url = `http://localhost:5000/toys?email=${user?.email}`
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            setMyToys(data)
        })
    },[])

    const handleDelete = id=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete your data",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                 fetch(`http://localhost:5000/addToys/${id}`,{
                method: "DELETE",
                
            })
            .then(res => res.json())
            .then(data=> {
                console.log(data)
                if(data.deletedCount>0){
                    Swal.fire({
                        title: 'success',
                        text: 'Deleted Successfully',
                        icon: 'success',
                        confirmButtonText: 'Okey'
                      })
                      const remaining = myToys.filter(toy => toy._id !== id);
                      setMyToys(remaining)
                }
            })
              )
            }
          })
       }
    return (
        <div className='bg-[#E8F7FF]'>
           <div>
           
           </div>
            <h1 className='text-5xl text-center py-16'>My Toys</h1>
            <table className=" w-full mx-auto bg-[#E8F7FF]">
                <thead className='text-left hover:bg-[#daeef9] '>
                    {/* <tr className=''>
                        <th className='text-xl'>Image</th>
                        <th className='text-xl'>Name</th>
                        <th className='text-xl'>Quantity</th>
                        <th className='text-xl'>Price</th>
                        <th className='text-xl'>Category</th>
                        <th className='text-xl'>Details</th>
                    </tr> */}
                </thead>
                <tbody className='bg-[#E8F7FF]'>
                    {
                     myToys.map(toy => <MyToyTable
                     key={toy._id}
                     toy={toy}
                     handleDelete={handleDelete}
                     ></MyToyTable>)  
                    }
                </tbody>

            </table>

        </div>
    );
};

export default MyToy;