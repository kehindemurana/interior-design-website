// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaVectorSquare } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { BiSolidDollarCircle } from "react-icons/bi";
import { motion } from 'framer-motion'
import { SlideUp } from '../../animation/animate';

const servicesCard = [
  {
    id: 1,
    title: 'Luxury Facilities',
    description: 'Lorem Ipsum dolor sit amaet...',
    icon: <FaVectorSquare />,
    link: 'Learn More',
  },
  {
    id: 2,
    title: 'Quality Products',
    description: 'Lorem Ipsum dolor sit amaet...',
    icon: <FaPenToSquare />,
    link: 'Learn More',
  },
  {
    id: 3,
    title: 'Affordable Prices',
    description: 'Lorem Ipsum dolor sit amaet...',
    icon: <BiSolidDollarCircle />,
    link: 'Learn More',
  },
];

const Services = () => {
  return (
    <div className=''>
      <div className='container py-20'>
        {/*heading title */}
        <div className='space-y-3 text-center max-w-[500px] mx-auto mb-8'>
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            WhileInView={'animate'}
            className='text-2xl font-bold font-serif'
          >
            What we provide
          </motion.h1>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            WhileInView={'animate'}
            className='text-sm text-gray-500'
          >
            Bring your dream home to life with one-on-one designed help &
            handpicked product{' '}
          </motion.p>
        </div>
        {/*card section */}
        <div
          className='grid grid-cols-1
              gap-5 md:grid-cols-3'
        >
          {
            // eslint-disable-next-line no-unused-vars
            servicesCard.map((card, id) => {
              return (
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  WhileInView={'animate'}
                  key={card.id}
                  className='space-y-4 border-[1px]
                             border-black/30 p-6 hover:bg-black hover:text-white
                             hover:shadow-[7px_7px_0px_0px#6c6c6c] duration-300'
                >
                  <span
                    className='text-2xl border-[1px] border-black
                              rounded-full inline-block p-3'
                  >
                    <div>{card.icon}</div>
                  </span>
                  <p className='text-2xl font-bold '>{card.title}</p>
                  <p>{card.description}</p>
                  <a
                    href={card.link}
                    className='border-b border-black inline-block'
                  >
                    {card.link}
                  </a>
                </motion.div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Services;
