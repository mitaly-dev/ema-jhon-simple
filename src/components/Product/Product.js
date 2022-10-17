import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = ({product,handleAddToCart}) => {
    let {img,name,price,ratings,seller}=product
    return (
        <div className="card w-full bg-base-100 shadow-xl border rounded-none relative">
        <figure className='p-2'><img src={img} alt="Shoes" onError={(e)=>{
          e.currentTarget.src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png';
          e.currentTarget.height='400px';
        }} /></figure>
        <div className="text-left p-4 mb-11 leading-7">
          <h2 className="capitalize text-xl font-semibold">{name && name.slice(0,20)}</h2>
          <h3 className='font-semibold text-lg py-2'>Price: ${price?price:'Not Found'}</h3>
          <p className='text-[#2A414F] text-[15px] mt-8'>Manufacturer : {seller?seller:"not foound"}</p>
          <p className='text-[#2A414F] text-[15px]'>Ratting : {ratings?ratings:'not found'} start</p>
        </div>
        <button onClick={()=>handleAddToCart(product)} className=" w-full bg-[#FFE0B3] hover:bg-orange-300 absolute bottom-0 text-center py-3 font-semibold mr-2 ">Add To Cart
        <span><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></span>
        </button>
        </div>
    );
};

export default Product;