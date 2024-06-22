import React from 'react';
import { GiPriceTag } from "react-icons/gi";
import { FaCar } from 'react-icons/fa';
import { BsShieldLock } from "react-icons/bs";
const Choose = () => {
  return (
    <div className='w-full mx-auto text-center pt-16 px-3 lg:px-[300px]'>
      <h3 className='text-2xl py-9'>Why Choose Us?</h3>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-4 py-3'>
        <div className='flex flex-row justify-start gap-4 items-center'>
          <GiPriceTag className='text-red-400 text-6xl  w-16 h-auto' />
          <div className='flex flex-col justify-start gap-2'>
            <h4 className='text-lg text-start'>Best Price</h4>
            <p className=' text-start text-xs '>Our Stress-Free Finance Department Can Find Financial Solutions To Save You Money.</p>
          </div>
        </div>
        <div className='flex flex-row justify-start gap-4 items-center'>
          <FaCar className='text-cyan-300 text-6xl  w-16 h-auto' />
          <div className='flex flex-col justify-start gap-2'>
          <h4 className='text-lg text-start'>Trusted By Thousands</h4>
            <p className=' text-start text-xs'>Our Stress-Free Finance Department That Can Find Financial Solutions To Save You Money.</p>
          </div>
        </div>
        <div className='flex flex-row justify-start gap-4 items-center'>
          <BsShieldLock className='text-green-300 text-6xl  w-16 h-auto ' />
          <div className='flex flex-col justify-start gap-2'>
          <h4 className='text-lg text-start'>Wide Range of Brands</h4>
            <p className=' text-start text-xs'>Our Stress-Free Finance Department That Can Find Financial Solutions To Save You Money.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
