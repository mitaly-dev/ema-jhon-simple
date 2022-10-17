import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import { addCartDB, clearDB, getLocalData } from '../Utilities/localStorage';
import OrderSummary from '../OrderSummary/OrderSummary';
import { Link, useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {
    let [cartProduct,setCartProduct]=useState([])

    let {products:productData}=useLoaderData()

    //order summery from localstorage
    useEffect(()=>{
        let cart= getLocalData()
        let newCart=[]
       for(let id in cart){
        let exit=productData.find(products=>products.id===id)
        if(exit){
            exit.quantity=cart[id]
            newCart.push(exit)
        }
       }
       setCartProduct(newCart)
  
    },[productData])

    // add to cart handler
    const handleAddToCart=(product)=>{
      let exit=cartProduct.find(products=>products.id===product.id)
      let newArray=[]
      if(!exit){
        product.quantity=1
        newArray=[...cartProduct,product]
      }
      else{
        let rest=cartProduct.filter(products=>products.id!==product.id)
        product.quantity=product.quantity+1;
        newArray=[...rest,product]
      }
      setCartProduct(newArray)
      addCartDB(product.id)
    }

    const clearCart=()=>{
        clearDB()
        setCartProduct([])
    }


    return (
        <div className='grid grid-cols-5'>
            <div className='col-span-4'>
                <div className='grid grid-cols-3 gap-8 px-20 py-20'>
                {
                    productData.map(product=><Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>)
                }
                </div>
            </div>
            <div className='col-span-1 bg-[#FFE0B3] py-10 px-5'>
               <OrderSummary cart={cartProduct} clearCart={clearCart}>
                    <Link to='/orders' className="px-12 py-3 font-medium text-lg w-full bg-[#FF9900] rounded-md capitalize mt-3">Review Order
                    <span className='pl-2'><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></span>
                    </Link>
               </OrderSummary>
            </div>
        </div>
    );
};

export default Shop;