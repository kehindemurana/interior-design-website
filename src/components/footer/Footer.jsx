// eslint-disable-next-line no-unused-vars
import React from 'react';
import Logo from '../../assets/logo.png'
import { FaPhone, } from 'react-icons/fa';
import { LuMessageSquare } from 'react-icons/lu';
import {motion} from 'framer-motion'
import { SlideUp } from '../../animation/animate';
const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      WhileInView={'animate'}
    >
      <div className='container py-11 mx-auto '>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 '>
          {/*Company Info */}
          <div className='space-y-4 font-semibold'>
            <div className='flex items-center gap-3'>
              <img src={Logo} alt='' className='w-6' />
              <p className='text-xl font-semibold'>Interior</p>
            </div>
            <p>No 1 Ralawal St. Tanke Ilorin Kwara State, Nigeria</p>
            <p>@ 2024 interior All rights reserved</p>
          </div>
          {/*Footer Link*/}
          <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
            <div className='space-y-4'>
              <h1 className='text-xl font-semibold'>About Us</h1>
              <ul className='text-sm space-y-4'>
                <li>
                  <a href='#'>Our story</a>
                </li>
                <li>
                  <a href='#'>Designer</a>
                </li>
                <li>
                  <a href='#'>Craftmanship</a>
                </li>
                <li>
                  <a href='#'>Sustainability</a>
                </li>
              </ul>
            </div>
            <div className='space-y-4'>
              <h1 className='text-xl font-semibold'>Support</h1>
              <ul className='text-sm space-y-4'>
                <li>
                  <a href='#'>FAQs</a>
                </li>
                <li>
                  <a href='#'>Shipping & Return</a>
                </li>
                <li>
                  <a href='#'>Care Guide</a>
                </li>
                <li>
                  <a href='#'>Guaranty</a>
                </li>
              </ul>
            </div>
            <div className='space-y-4'>
              <h1 className='text-xl font-semibold'>Contact Us</h1>
              <ul className='text-base font-semibold space-y-4'>
                <li className='flex items-center space-x-3'>
                  <FaPhone />
                  <a href='#'>+234 7063408089</a>
                </li>
                <li className='flex items-center space-x-3'>
                  <LuMessageSquare />
                  <a href='#'>kehindemurana326@gmail.com</a>
                </li>

                <li>
                  <a href='#'>Guaranty</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*bottom Section */}
        <p className='text-center text-sm font-semibold p-10 mt-5 border-t-2'>
          &copy; 2024 KM.All rights reserved
        </p>
      </div>
    </motion.footer>
  );
}

export default Footer;
