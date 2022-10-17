import React from 'react';
import logo from '../../images/Logo.svg'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <div className="flex justify-between items-center py-2 bg-[#1C2B35] text-white px-28">
            <div>
            <Link to='/'>
            <img src={logo} alt="logo" />  
            </Link>
            </div>
            <ul className="flex capitalize">
                <li className='pl-10 text-[16px]'><NavLink className={({ isActive })=>isActive ? 'text-yellow-500' : undefined} to ='/home'>Home</NavLink></li>
                <li className='pl-10 text-[16px]'><NavLink className={({ isActive })=>isActive ? 'text-yellow-500' : undefined} to ='shop'>Shop</NavLink></li>
                <li className='pl-10 text-[16px]'><NavLink className={({ isActive })=>isActive ? 'text-yellow-500' : undefined} to ='orders'>order review</NavLink></li>
                <li className='pl-10 text-[16px]'><NavLink className={({ isActive })=>isActive ? 'text-yellow-500' : undefined} to ='inventory'>Manage Inventory</NavLink></li>
                <li className='pl-10 text-[16px]'><NavLink className={({ isActive })=>isActive ? 'text-yellow-500' : undefined} to ='login'>Login</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;