import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft} from '@fortawesome/free-solid-svg-icons'

const OrderSummary = ({cart,clearCart,children}) => {
    let shipping=0
    let quantity=0;
    let total=0;

    for(let product of cart){
        quantity=quantity+product.quantity
        total=total+(product.price*product.quantity)
        shipping=shipping+(product.shipping*product.quantity)
    }

    let tax=total*10/100
    let grandTotal=total+shipping+tax
    


    return (
        <div className='sticky top-0'>
            <h2 className='text-2xl font-semibold text-center pb-10'>Order Summary</h2>
               <div className='text-left capitalize'>
                <p className='text-[#2A414F] text-lg leading-10'>selected items: {quantity}</p>
                <p className='text-[#2A414F] text-lg leading-10'>Total Price: ${total}</p>
                <p className='text-[#2A414F] text-lg leading-10'>Total Shipping Charge: ${shipping}</p>
                <p className='text-[#2A414F] text-lg leading-10'>Tax: ${tax}</p>
                <p className='text-[#2A414F] text-lg leading-10 font-semibold'>Grand Total : ${grandTotal}</p>
               </div>
               <div>
               <div className=" text-white text-center mt-14 ">
                <button onClick={clearCart} className=" py-3 font-medium text-lg w-full bg-[#FF3030] rounded-md capitalize">clear cart
                <span className='pl-2'><FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon></span>
                </button>
                <div className='mt-5'>
                {children}
                </div>
                </div>
               </div>
        </div>
    );
};

export default OrderSummary;