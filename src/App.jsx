// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Brand from './components/brand/Brand';
import Services from './components/services/Services';
import Banner from './components/banner/Banner';
import Banner2 from './components/banner/Banner2';
import Testimonial from './components/testimonial/Testimonial'
import NewsLetter from './components/newsLetter/NewsLetter';
import Footer from './components/footer/Footer';


const App = () => {
  return (
    <main className='overflow-x-hidden p-5 '>
      <Navbar />
      <Hero />
      <Brand />
      <Services />
      <Banner />
      <Banner2 />
      <Testimonial />
      <NewsLetter />
      <Footer/>
    </main>
  );
}

export default App;
