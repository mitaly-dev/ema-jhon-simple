import React from 'react';
import { faDeleteLeft, faTrash, faTrashAlt, faTrashArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const OrderReview = ({product,deleteCart}) => {
    console.log(product)
    let {id,img,name,price,shipping,quantity}=product
 
    return (
        <div>
           <div className='flex border rounded-lg p-2 w-8/12 m-auto mb-5'>
            <div className='w-[91px]'><img src={img} alt='product_image' className='w-full h-full object-cover' /></div>
            <div className='px-3 text-[1C2B35] flex justify-between items-center w-full'> 
                <div>
                    <h3 className='font-semibold '>{name}</h3>
                    <h3 className='text-[16px]'><span className='font-semibold'>Price  :  </span><span className='text-[#FF9900]'>${ price}</span></h3>
                    <h3 className='text-[16px]'><span className='font-semibold'>Quantity  :  </span><span className='text-[#FF9900]'>{ quantity}</span></h3>
                    <h3 className='text-[16px]'><span className='font-semibold'>Shipping Charge  :  </span><span className='text-[#FF9900]'>${ shipping}</span></h3>
                </div>
                <button onClick={()=>deleteCart(id)} className='bg-[#eb575738] w-[55px] h-[55px] rounded-full'>
                  <FontAwesomeIcon className='text-[#EB5757] text-2xl' icon={faTrashArrowUp}></FontAwesomeIcon>
                </button>
            </div>
           </div>
        </div>
    );
}

export default OrderReview;