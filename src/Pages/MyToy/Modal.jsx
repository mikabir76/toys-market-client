import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Modal = ({open, onClose, toy}) => {
    if(!open) return null;
    const handleUpdateForm = event =>{
      event.preventDefault()
      const form = event.target;
      const price = form.price.value;
      const quantity = form.quantity.value;
      const description = form.description.value;
      const update = {price, quantity, description}
      // console.log(price, quantity, description)
      fetch(`http://localhost:5000/addToys/${toy._id}`,{
        method: "PUT",
        headers:{
          "Content-Type" : "application/json"
        },
        body:JSON.stringify(update)
      })
      .then(res => res.json())
      .then(data =>{
        if(data.modifiedCount>0){
          
          Swal.fire({
            title: 'success',
            text: 'Your data has been updated',
            icon: 'success',
            confirmButtonText: 'Update'
          })
        }
        
      })
     
    }
    return (
        <div  className='fixed inset-0 flex justify-center items-center bg-black/20 backdrop-blur-sm'>
           <div className='bg-[#bcd5e3] hover:bg-[#bbd0dd] p-4 rounded-xl shadow-inner'>
           <div className='flex justify-between items-center'>
           <p></p>
           <button className='w-20  p-2 text-2xl font-bold text-gray-800 rounded-full' onClick={onClose}>X</button>
           </div>
          
      <form onSubmit={handleUpdateForm}>
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold text-gray-800">Price</span>
          </label>
          <input type="text" name='price' defaultValue={toy.price} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold text-gray-800">Available Quantity</span>
          </label>
          <input type="text" name='quantity' defaultValue={toy.quantity}  className="input input-bordered" />
        </div>
        <div className="form-control">
        <label className="label">
            <span className="label-text text-xl font-semibold text-gray-800">Description</span>
          </label>
          <textarea className='input-bordered' defaultValue={toy.description} name="description" id="" cols="30" rows="10"></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn-style">Update</button>
        </div>
      </div>
      </form>
    
           </div>
        </div>
    );
};

export default Modal;
