// eslint-disable-next-line no-unused-vars
import React from 'react';
import Banner1 from '../../assets/banner.png'
import { motion } from 'framer-motion'
import { SlideUp } from '../../animation/animate';

const Banner = () => {
  return (
    <div>
      <div className='container'>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
          {/*image section */}
          <div className='flex flex-col items-center justify-center'>
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2}}
              WhileInView={'animate'}
              src={Banner1}
              alt=''
              className='w-[80%] 
            md:w-full mx-auto'
            />
          </div>
          {/*text section */}
          <div
            className='flex justify-center space-y-4 flex-col 
          text-center md:text-left xl:max-w-[400px]'
          >
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              WhileInView={'animate'}
              className='text-3xl font-bold'
            >
              We believe that a team makes any project better
            </motion.h1>

            <motion.p
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              WhileInView={'animate'}
              className='text-sm text-gray-500'
            >
              Lorem Ipsum dolor sit amaet...,
            </motion.p>
            <motion.button
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              WhileInView={'animate'}
              className='primary-btn w-[40%]'
            >
              Discover Now
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
