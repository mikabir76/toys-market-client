import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';

const NavBar = () => {
  const {user, logOut} = useContext(AuthContext);
  console.log(user)
    const navItem = <>
    <li><NavLink to='/' className={({isActive}) => isActive ? 'bg-gradient-to-r from-[#6D74E4] to-[#848FFF] py-2 px-4 rounded-md text-xl text-white ' : ""}>Home</NavLink></li>
    <li><NavLink to='/blog' className={({isActive}) => isActive ? 'bg-gradient-to-r from-[#6D74E4] to-[#848FFF] py-2 px-4 rounded-md text-xl text-white ' : ""}>Blog</NavLink></li>
    <li><NavLink to='/toys' className={({isActive}) => isActive ? 'bg-gradient-to-r from-[#6D74E4] to-[#848FFF] py-2 px-4 rounded-md text-xl text-white ' : ""}>All Toy</NavLink></li>
   {user && <>
    <li><NavLink to='/add' className={({isActive}) => isActive ? 'bg-gradient-to-r from-[#6D74E4] to-[#848FFF] py-2 px-4 rounded-md text-xl text-white ' : ""}>Add Toys</NavLink></li>
    <li><NavLink to='/mytoy' className={({isActive}) => isActive ? 'bg-gradient-to-r from-[#6D74E4] to-[#848FFF] py-2 px-4 rounded-md text-xl text-white ' : ""}>My Toys</NavLink></li>
    </>}
    </>

    const handleLogOut = ()=>{
      logOut()
      .then(()=>{})
      .catch(error =>{
        console.log(error)
      })

    }
    return (
        <div className="navbar bg-[#E8F7FF] border-y-2 p-5 text-xl font-semibold">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {navItem}
      </ul>
    </div>
    <div className='flex'>
        <img className='w-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ESO7Fc4AnNyLnPofZfDqhLS50TBQDpp-tw&usqp=CAU" alt="" />
    <a className="btn btn-ghost normal-case text-2xl font-extrabold">Tukutoys</a>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navItem}
    </ul>
  </div>
  <div className="navbar-end">
 
  <div className="tooltip tooltip-left" data-tip={user?.displayName}>
    <img className='rounded-full me-4 w-16 hover:border-4' src={user?.photoURL} />
  </div>
  
    
  {user?
  <button onClick={handleLogOut} className='bg-gradient-to-r from-[#6D74E4] to-[#848FFF] py-2 px-4 rounded-md text-xl text-white'>Log Out</button>:
  <Link to='/login'><button className='bg-gradient-to-r from-[#6D74E4] to-[#848FFF] py-2 px-4 rounded-md text-xl text-white'>Login</button></Link>}
   
  </div>
</div>
    );
};

export default NavBar;

// E8F7FF back side


// button 6D74E4 90% 848FFF