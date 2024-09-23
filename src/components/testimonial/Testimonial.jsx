
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion'
import { SlideUp } from '../../animation/animate';
const TestimonialData = [
  {
    id: 1,
    name: 'kehinde',
    designation: 'Designer',
    img: 'https://i.pravatar.cc/300?img=1',
    text: 'Lorem Ipsum dolor sit amaet...',
  },
  {
    id: 1,
    name: 'Taiwo',
    designation: 'Developer',
    img: 'https://i.pravatar.cc/300?img=2',
    text: 'Lorem Ipsum dolor sit amaet...',
  },
  {
    id: 1,
    name: 'Alabs',
    designation: 'Manager',
    img: 'https://i.pravatar.cc/300?img=3',
    text: 'Lorem Ipsum dolor sit amaet...',
  },
];

const Testimonial = () => {
  return (
    <div className='container py-14'>
      {/* header titke*/}
      <div className='space-y-3 text-center max-w-[500px] mx-auto mb-8'>
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          WhileInView={'animate'}
          className='text-4xl font-bold font-serif'
        >
          Words from our customers
        </motion.h1>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          WhileInView={'animate'}
          className='text-sm text-gray-500 max-w-[350px] mx-auto'
        >
          Bring your dream home to life with one-on-one designed help &
          handpicked product
        </motion.p>
      </div>
      {/*testimonial card */}
      <div className='bg-black p-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          {TestimonialData.map((card, id) => {
            return (
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                WhileInView={'animate'}
                key={card.id}
                className='border-[1px]
               border-gray-500 p-5 text-white group
                hover:bg-white duration-300'
              >
                {/*upper section */}
                <div
                  className='flex flex-row items-center gap-3 
                '
                >
                  <img
                    src={card.img}
                    alt=''
                    className=' rounded-full w-[100px]'
                  />
                  <div>
                    <p className='text-sm font-bold font-serif group-hover:text-black'>
                      {card.name}
                    </p>
                    <p className='text-gray-500 text-xs'>{card.designation}</p>
                    <div className='text-xs mt-2'>⭐⭐⭐⭐⭐</div>
                    {/*bottom section */}
                    <div className='mt-5 border-t-2 border-gray-500/40 pt-5'>
                      <p
                        className='text-sm text-gray-300
                       group-hover:text-black duration-300'
                      >
                        {card.text}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
