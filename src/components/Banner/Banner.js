import React from 'react';
import bannerImg from '../../images/banner.jpg'
import Modal from '../Modal/Modal';
import reader from '../../assets/reader.json'
import Lottie from 'lottie-react'

const Banner = () => {
    return (
        <div className='h-[91vh]'>
            <div className='flex items-center justify-between px-28 py-10 h-full bg-slate-100'>
            <div>
                <small className='text-[#FF9900] text-lg'>Sale up to 70% off</small>
                <div className='py-10'>
                    <h1 className='font-semibold text-4xl'>New Collection For Fall</h1>
                    <p className='text-[#2A414F] text-lg mt-2'>Discover all the new arrivals of ready-to-wear collection.</p>
                </div>
                <label htmlFor="my-modal-4" className="bg-[#FF9900] py-3 px-5 font-semibold cursor-pointer">SHOP NOW</label>
            </div>
            <div className=''>
                {/* <img src={bannerImg} alt="" className='w-[80%] float-right' /> */}
                <Lottie animationData={reader} loop={true}/>
                
            </div>
        </div>
        <Modal></Modal>
        </div>
    );
};

export default Banner;