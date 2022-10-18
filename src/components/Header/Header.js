import React from 'react';
import logo from '../../images/Logo.svg'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Header = () => {
    const [name,setName ] = useState()
    const {user , loading, logOutHandle}= useContext(AuthContext)

    const logOut=()=>{
        logOutHandle()
        toast.success('Sign Out successfull',{autoClose:500})
    }

    return (
        <nav>
            <div className="flex justify-between items-center py-2 bg-[#1C2B35] text-white px-28">
            <div className='flex'>
            <Link to='/'>
            <img src={logo} alt="logo" />  
            </Link>
            <div className='flex items-center ml-5'>
                <div className='w-[50px] h-[50px] rounded-full'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6swZO8d-ZWsYcFSMuRaipYJhGTDvJVJ-dIg&usqp=CAU" alt=""className='w-full h-full rounded-full' />
                </div>
                <p className='ml-2 font-semibold'>{user?.displayName}</p>
            </div>
            </div>
            <ul className="flex capitalize items-center">
                <li className='pl-10 text-[16px]'><NavLink className={({ isActive })=>isActive ? 'text-yellow-500' : undefined} to ='/home'>Home</NavLink></li>
                <li className='pl-10 text-[16px]'><NavLink className={({ isActive })=>isActive ? 'text-yellow-500' : undefined} to ='shop'>Shop</NavLink></li>
                <li className='pl-10 text-[16px]'><NavLink className={({ isActive })=>isActive ? 'text-yellow-500' : undefined} to ='orders'>order review</NavLink></li>
                <li className='pl-10 text-[16px]'><NavLink className={({ isActive })=>isActive ? 'text-yellow-500' : undefined} to ='inventory'>Manage Inventory</NavLink></li>
                {
                user?.uid ? 
                <button onClick={logOut} className='px-5 ml-5 py-2 rounded-lg text-[16px] bg-purple-500'>
                <NavLink className={({ isActive })=>isActive ? 'text-black' : undefined} to ='/login'>Log Out</NavLink>
                </button>
                : 
                <div className='flex'>
                    <li className='px-5 ml-4 py-2 rounded-lg text-[16px] bg-purple-500'>
                        <NavLink className={({ isActive })=>isActive ? 'text-black' : undefined} to ='signup'>SignUp</NavLink>
                    </li>
                    <li className='px-5 ml-2 py-2 rounded-lg text-[16px] bg-purple-500'>
                        <NavLink className={({ isActive })=>isActive ? 'text-black' : undefined} to ='login'>Log In</NavLink>
                    </li>
                </div>
                }
                </ul>
               
            </div>
        </nav>
    );
};

export default Header;