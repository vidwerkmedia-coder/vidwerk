import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './UI/Header';
import Hero from './UI/Hero';
import Features from './UI/Features';
import Pricing from './UI/Pricing';
import Process from './UI/Process';
import Footer from './UI/Footer';
import OurWorkL from './UI/OurWorkL';
import OurWorkS from './UI/OurWorkS';
import OurWorkT from './UI/OurWorkT';
import Form from './UI/Form';
import MarqueeDemo from './UI/Reviews';

function Layout() {
  const location = useLocation();

  return (
    <div className="relative flex flex-col justify-center">

      {/* Header + Sections */}
      <Header />
      <Hero />
      <div className='bg-[#030006]'>
      <Features />
      <Pricing />
      {/* Page content with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}>
        <Outlet />
        </motion.div>
      </AnimatePresence>
      <Process />
      {/* Our Work Section */}
      <h2  id='work' className="text-[2.2rem] text-white md:text-[3rem] mt-20 pl-[5%] lg:pl-0 lg:ml-[7%] md:ml-0 font-normal font-inter tracking-wide capitalize">
        our work
      </h2>
      <OurWorkL />
      <OurWorkT />
      <OurWorkS />
      {/* Reviews Section */}
      <MarqueeDemo />
      <Form />
      <Footer />
      </div>
    </div>
  );
}

export default Layout;
