import React from 'react'
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Work() {
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
        transition={{ duration: 0.5 }}
        
    className='bg-gray-800 pb-28 mt-10 md:pt-2'>
      <div className='container'>
        <div className='items-center p-4 pt-10 mt-10 md:w-2/5 mx-auto justify-center'>
            <h1 className='text-center font-bold text-2xl md:text-7xl text-white font-roboto'>How It Work</h1>
            <h4 className='text-gray-300 font-roboto text-center mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor adipisicing elit.</h4>
        </div>
        <div className='md:flex justify-between space-y-8 md:space-y-0 mx-auto mt-10 pb-4'>
            <div className=''>
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-bitcoin-cloud-1654968-1404429.png" className='w-20 h-20 mx-auto' alt="" />
                <p className='text-center text-xs text-white'>Step 1</p>
                <h1 className='text-white font-roboto text-center mt-1 text-lg'>Buy Crypto</h1>
                <p className='w-64 text-center mx-auto text-gray-400 font-roboto text-md mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div>
                <img src="https://i.pinimg.com/originals/f7/d9/e1/f7d9e178286ee3e0e0ee1d96732ef03c.png" className='w-20 h-20 mx-auto' alt="" />
                <p className='text-center text-xs text-white'>Step 2</p>
                <h1 className='text-white font-roboto text-center mt-1 text-lg'>Connect Wallet</h1>
                <p className='w-64 text-center  mx-auto text-gray-400 font-roboto text-md mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div>
                <img src="https://cdn-icons-png.flaticon.com/512/887/887731.png" className='w-18 h-16 mt-4 mx-auto' alt="" />
                <p className='text-center text-xs text-white'>Step 3</p>
                <h1 className='text-white font-roboto text-center text-lg mt-1'>Start Trading</h1>
                <p className='w-64 text-center  mx-auto text-gray-400 font-roboto text-md mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div>
                <img src="https://cdn-icons-png.flaticon.com/128/5382/5382410.png" className='w-20 h-20 mx-auto' alt="" />
                <p className='text-center text-xs text-white'>Step 4</p>
                <h1 className='text-white font-roboto text-center text-lg mt-1'>Earn Money</h1>
                <p className='w-64 text-center  mx-auto text-gray-400 font-roboto text-md mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            
        </div>
      </div>
      
    </motion.div>
  )
}

export default Work
