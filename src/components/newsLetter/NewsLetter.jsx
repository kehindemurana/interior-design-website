// eslint-disable-next-line no-unused-vars
import React from 'react';

const NewsLetter = () => {
  return (
    <div className='max-w-[400px] mx-auto'>
      <h1
        className='text-3xl font-bold 
      font-serif text-center'
      >
        Subscribe to our NewsLetter
      </h1>
      <p className='text-gray-500 text-sm text-center max-w-[300px] mx-auto'>
        Lorem Ipsum dolor sit amaet...
      </p>
      {/*input form */}
      <div className=' flex justify-center'>
              <input type='text' placeholder='Enter Your Email' className='px-4 py-4 
        ring-gray-300 ring-1'/>
        <button
          className='bg-black text-white px-6
          py-4 '
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default NewsLetter;
