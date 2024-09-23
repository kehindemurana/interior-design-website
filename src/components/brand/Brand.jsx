// eslint-disable-next-line no-unused-vars
import React from 'react';
import brand1 from '../../assets/brand/1.png';
import brand2 from '../../assets/brand/2.png';
import brand3 from '../../assets/brand/3.png';
import brand4 from '../../assets/brand/4.png';
import brand5 from '../../assets/brand/5.png';
import { motion } from 'framer-motion'
import { SlideLeft } from '../../animation/animate';



const Brand = () => {
  return (
    <>
      <div className='container py-20'>
        <div className='flex justify-center  flex-wrap'>
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            WhileInView={'animate'}
            src={brand1}
            alt=''
            className='w-[120px]'
          />
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            WhileInView={'animate'}
            src={brand2}
            alt=''
            className='w-[120px]'
          />
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            WhileInView={'animate'}
            src={brand3}
            alt=''
            className='w-[120px]'
          />
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            WhileInView={'animate'}
            src={brand4}
            alt=''
            className='w-[120px]'
          />
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            WhileInView={'animate'}
            src={brand5}
            alt=''
            className='w-[120px]'
          />
        </div>
      </div>
    </>
  );
};

export default Brand;
