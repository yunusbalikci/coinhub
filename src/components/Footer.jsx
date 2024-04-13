import React from 'react'
import logo from '../images/logo.png'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect , useState } from 'react'

function Footer() {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
      if (inView) {
        controls.start('visible');
      } else {
        controls.start('hidden');
      }
    }, [controls, inView]);

  return (
    <motion.div
    ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 100 },
              }}
              transition={{ duration: 0.5, delay: 0.1 }}
    className='bg-gray-800 pb-4'>
      <div className='container flex text-white font-roboto mt-2 pt-10 pb-10 justify-between'>
        <div className='space-y-4'>
            <div className='flex'>
                <img src={logo} className='w-16' alt="" />
                <h1 className='text-5xl mt-2 mr-4'>Coinhub</h1>
            </div>
            <h2 >Contact Us!</h2>
            <h3 className='text-gray-300'>+12 345 6789</h3>
            <h3 className='text-gray-300'>coinhub@example.com</h3>
        </div>
        <div className='space-y-2'>
            <h1 className='font-bold text-lg'>Products</h1>
            <h2 className='text-gray-300'>Contact Us!</h2>
            <h3 className='text-gray-300'>+12 345 6789</h3>
            <h3 className='text-gray-300'>coinhub@example.com</h3>
        </div>
        <div className='space-y-2 text-lg'>
            <h1 className='font-bold'>Service</h1>
            <h2 className='text-gray-300'>Contact Us!</h2>
            <h3 className='text-gray-300'>+12 345 6789</h3>
            <h3 className='text-gray-300'>coinhub@example.com</h3>
        </div>
        <div className='space-y-2'>
            <h1 className='font-bold text-lg'>About Us</h1>
            <h2 className='text-gray-300'>Contact Us!</h2>
            <h3 className='text-gray-300'>+12 345 6789</h3>
            <h3 className='text-gray-300'>coinhub@example.com</h3>
        </div>


      </div>
      <h3 className='text-center font-roboto text-white'>© 2022 Coinhub All Rights Reserved</h3>
    </motion.div>
  )
}

export default Footer
