import React from 'react';


const AddToy = () => {
   
    const handleAddToy = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const seller = form.seller.value;
        const email = form.email.value;
        const category = form.category.value;
        const price = form.price.value;
        const ratting = form.ratting.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        // console.log(name, photo, seller, email, category, price, ratting, quantity, description)
        const toyInfo = {name, photo, seller, email, category, price, ratting, quantity, description}
        console.log(toyInfo)
    }
    return (
        <div className='bg-[#E8F7FF] p-8'>
            <h1 className='text-4xl text-center font-bold'>Add Toy</h1>
          
           <form onSubmit={handleAddToy}>
           <div className="card-body">
       <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-4'>
       <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">Name</span>
          </label>
          <input type="text" placeholder="Name" name='name' className="input input-bordered" />
        </div>
       <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">Photo URL</span>
          </label>
          <input type="text" placeholder="Photo" name='photo' className="input input-bordered" />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">Seller Name</span>
          </label>
          <input type="text" placeholder="Seller Name" name='seller' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">Seller Email</span>
          </label>
          <input type="email" placeholder="Seller Email" name='email' className="input input-bordered" />
        </div>
       <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">Sub-Category</span>
          </label>
         <select className='input input-bordered' name="category" id="categroy">
            <option value="cricket">Cricket Toy</option>
            <option value="football">Football Toy</option>
            <option value="basketball">Basketball Toy</option>
         </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">Price</span>
          </label>
          <input type="text" placeholder='Price' name='price' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">Ratting</span>
          </label>
          <select className='input input-bordered' name="ratting" id="ratting">
            <option selected value="5">5 Star</option>
            <option value="4.5">4.5 Star</option>
            <option value="4">4 Star</option>
            <option value="3">3 Star</option>
         </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">Available Quantity</span>
          </label>
          <input type="text" placeholder="Available Quantity" name='quantity' className="input input-bordered" />
        </div>
       </div>
       <div>
        <textarea name="description" placeholder='Description' id="" className='w-full mt-2 h-24 input-bordered input'></textarea>
       </div>
        <div className="form-control mt-6">
          <button className="bg-gradient-to-r from-[#6D74E4] to-[#848FFF] py-2 px-4 rounded-md text-xl text-white">Submit</button>
        </div>
     
        </div>
           </form>
        </div>
    );
};

export default AddToy;