// eslint-disable-next-line no-unused-vars
import React from 'react';
import Banner1 from '../../assets/banner.png';
import { motion } from 'framer-motion'
import {SlideUp} from '../../animation/animate'


const Banner2 = () => {
  return (
    <div>
      <div className='container py-14'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          {/*text section */}
          <div
            className='flex justify-center space-y-4 flex-col 
          text-center md:text-left'
          >
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              WhileInView={'animate'}
              className='text-4xl font-bold font-serif'
            >
              Simple way to make stylish living room
            </motion.h1>

            <p className='text-gray-500 text-sm leading-7'>
              Lorem Ipsum dolor sit amaet...,
            </p>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4}}
              WhileInView={'animate'}
              className='flex gap-3'
            >
              <div className='max-w-[100px] space-y-2'>
                <p className='text-3xl font-bold'>15</p>
                <p className='text-gray-500'>Years of experience</p>
              </div>
              <div>
                <p className='text-3xl font-bold'>350</p>
                <p className='text-gray-500'>Happy clients</p>
              </div>
              <div>
                <p className='text-3xl font-bold'>34</p>
                <p className='text-gray-500'>Award Gained</p>
              </div>
            </motion.div>
            <motion.button
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              WhileInView={'animate'}
              className='primary-btn w-[40%]
             bg-black text-white shadow-[5px_5px_0px_0px#6c6c6c]
              hover:shadow-[5px_5px_0px_0px_black]'
            >
              Contact us
            </motion.button>
          </div>
          {/*image section */}
          <div className='flex justify-center flex-col items-center'>
            <motion.img
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              WhileInView={'animate'}
              src={Banner1}
              alt=''
              className='w-[80%] 
            md:w-full mx-auto'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
