import React from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import OrderReview from '../OrderReview/OrderReview';
import OrderSummary from '../OrderSummary/OrderSummary';
import { addCartDB, clearDB, removeFromDb } from '../Utilities/localStorage';

const Orders = () => {
    let {products,cartProduct}=useLoaderData()
    let [cart,setCart]=useState(cartProduct)

    const deleteCart=(id)=>{
        let allCart=cart.filter(product=>product.id!==id)
       setCart(allCart)
       removeFromDb(id)
    }

    const clearCart=()=>{
    clearDB()
    setCart([])
    }


    return (
        <div className={`grid grid-cols-5 ${cart.length===0 &&'flex items-center justify-between'}`}>
        <div className='col-span-4 mt-10 '>
            {
                cart.map(product=><OrderReview key={product.id} product={product} deleteCart={deleteCart}></OrderReview>)
            } 
            {
                cart.length===0 && (
                <h3 className='text-center text-3xl font-semibold'>No Items for review ,Please <Link to="/shop" className='text-violet-800 underline'>Shop Now</Link></h3>
        
                )
            }
        </div>
        <div className='col-span-1 bg-[#FFE0B3] py-10 px-5'>
           <OrderSummary cart={cart} clearCart={clearCart}></OrderSummary>
        </div>
    </div>
    );
};

export default Orders;