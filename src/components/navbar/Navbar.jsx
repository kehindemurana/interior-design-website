// eslint-disable-next-line no-unused-vars
import React from 'react';
import Logo from '../../assets/logo.png'
import {motion} from 'framer-motion'
const NavbarLinks = [
  {
    id: 1,
    title: 'About',
    link: '#',
  },
  {
    id: 2,
    title: 'Services',
    link: '#',
  },
  {
    id: 3,
    title: 'Project',
    link: '#',
  },
  {
    id: 4,
    title: 'Contact',
    link: '#',
  },
];

const Navbar = () => {
  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{duration:0.5}}
        className='container py-4 flex justify-between
       items-center '>
        {/*Logo section */}
        <div className='flex items-center gap-3'>
          <img src={Logo} alt='' className='w-[16]' />
          <span className='text-3xl font-bold '> Interior</span>
        </div>
        {/*Link section */}
        <div className='hidden lg:flex md:block'>
          {NavbarLinks.map((link, index) => {
            return (
              <a
                href={link.link}
                key={index}
                className='mx-4 text-sm font-semibold'
              >
                {link.title}
              </a>
            );
          })}
        </div>
        {/*Button section */}
        <div>
          <button
            className='border-2 border-black text-sm
          lg:text-base px-4 py-2 shadow-[5px_5px_0px_0px]'
          >
            Try For Free
          </button>
        </div>
      </motion.div>
    </>
  );
}

export default Navbar;
