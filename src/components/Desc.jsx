import React from 'react'
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
function Desc() {
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
    >
      <div className='container'>
        <div className='grid grid-cols-2 container grid-rows-1 gap-8'>
            <div className='mt-10 pb-10'>
                <img src="https://tradesmartonline.in/tradeshaala/wp-content/uploads/2022/03/Cryptocurrency.png" className='mt-10' alt="" />  
            </div>
            <div className='mt-10 ml-8 pb-10'>
                <h1 className='text-white font-roboto text-6xl font-bold'>What Is CoinHub</h1>
                <p className='mt-4 text-gray-300 text-lg'>Experience a variety of trading on Bitcost. You can use various types of coin transactions such as Spot Trade, Futures Trade, P2P, Staking, Mining, and margin.</p>
                <div className='flex mt-10'>
                    <p className='bg-blue-800 w-8 h-8 text-2xl   text-center text-white rounded-full'>✓</p>
                    <p className='text-white text-xl ml-2 font-roboto mt-1'>View real-time cryptocurrency prices</p>
                </div>
                <p className='text-gray-300 text-lg mt-2'>Experience a variety of trading on Bitcost. You can use various types of coin transactions such as Spot Trade, Futures Trade, P2P, Staking, Mining, and margin.</p>
                <div className='flex mt-10'>
                    <p className='bg-blue-800 w-8 h-8 text-2xl   text-center text-white rounded-full'>✓</p>
                    <p className='text-white text-xl ml-2 font-roboto mt-1'>Buy and sell BTC, ETH, XRP, OKB, Etc...</p>
                </div>
                <p className='text-gray-300 text-lg mt-2'>Experience a variety of trading on Bitcost. You can use various types of coin transactions such as Spot Trade, Futures Trade, P2P, Staking, Mining, and margin.</p>
            </div>
        </div>
        
      </div>
    </motion.div>
  )
}

export default Desc
