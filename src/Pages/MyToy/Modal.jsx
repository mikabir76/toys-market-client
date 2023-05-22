import React from 'react';

const Modal = ({visible, onClose}) => {
    if(!visible) return null;

    const handleOnClose =()=>{
        onClose()
    }
    // 
    return (
        <div onClose={handleOnClose} className='fixed inset-0 flex justify-center items-center bg-black/10 backdrop-blur-sm'>
           <div className='bg-white p-4'>
           <p>Modal Open</p>
           <button className='w-16' onClose={onClose}>X</button>
          
           </div>
        </div>
    );
};

export default Modal;

{/* <label htmlFor="my-modal-3" className="btn">open modal</label>

{/* Put this part before </body> tag */}
{/* <input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
  </div>
</div> */} 