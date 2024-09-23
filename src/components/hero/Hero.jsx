// eslint-disable-next-line no-unused-vars
import React from 'react';
import HeroPng from '../../assets/hero.png';
import { motion } from 'framer-motion';
import {SlideUp} from '../../animation/animate'

const Hero = () => {
  return (
    <>
      <div className='container'>
        <div
          className='grid grid-cols-1 md:grid-cols-2
              min-h-[400px] '
        >
          {/*Text section */}
          <div
            className='flex flex-col justify-center
           gap-5 md:pr-0 text-center lg:pr-14 md:pt-0
            md:text-left pt-20 md:min-h-[500px] px-10'
          >
            <motion.h1
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className='text-5xl 
            font-bold'
            >
              SKETCH LUXURY INTERIOR
            </motion.h1>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className='text-sm text-gray-500'
            >
              Bring your dream to life with one-on-one design, help and hand
              picked products tailored to your style, space and budget
            </motion.p>
            <div className='space-x-4 '>
              <motion.button
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='primary-btn uppercase bg-black
               text-white
               '
              >
                Get started
              </motion.button>
              <motion.button
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='primary-btn uppercase'
              >
                Contact us
              </motion.button>
            </div>
          </div>
          {/*Images section */}
          <div className='flex justify-center flex-col items-center'>
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={HeroPng}
              alt=''
              className='h-full w-[80%] 
            object-cover md:scale-110'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
