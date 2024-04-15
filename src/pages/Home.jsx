import React from 'react'
import Header from '../components/Header'
import { motion } from "framer-motion";
import Market from '../components/Market';
import { useScroll } from "framer-motion"
import Card from '../components/Card';
import Work from '../components/Work';
import Desc from '../components/Desc';
import {  useEffect } from 'react';
import {  useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Footer from '../components/Footer';

const data =[
    {
      "name": "Bitcoin",
      "id": "bitcoin",
      "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
      "link" : "https://bitcoin.org/"
    },
    {
      "name": "Ethereum",
      "id": "ethereum",
      "image": "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
      "link" : "https://ethereum.org/"
    },
    {
      "name": "Binance",
      "id": "binancecoin",
      "image": "https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png",
      "link" : "https://www.binance.com/en/"
    },
    {
      "name": "Solana",
      "id": "solana",
      "image": "https://assets.coingecko.com/coins/images/4128/large/coinmarketcap-solana-200.png",
      "link" : "https://solana.com/"
    },
    {
      "name": "Cardano",
      "id": "cardano",
      "image": "https://assets.coingecko.com/coins/images/975/large/cardano.png",
      "link" : "https://cardano.org/"
    },
    {
      "name": "XRP",
      "id": "ripple",
      "image": "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png",
      "link" : "https://ripple.com/"
    },
    {
      "name": "Polkadot",
      "id": "polkadot",
      "image": "https://assets.coingecko.com/coins/images/12171/large/aJGBjJFU_400x400.jpg",
      "link" : "https://polkadot.network/"
    },
    {
      "name": "Dogecoin",
      "id": "dogecoin",
      "image": "https://assets.coingecko.com/coins/images/5/large/dogecoin.png",
      "link" : "https://dogecoin.com/"
    },

  ]

  function Home() {
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
      <div className='bg-gray-900 h-full'>
        <Header />
        <div>
          <div className="container">
          <div className='grid md:grid-cols-2 md:ml-0 container md:grid-rows-1 gap-2'>
            <div>
              <motion.h1
              initial={{ opacity: 0, translateY: -50 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 1 }}
              className='text-white mt-10 md:mt-32 font-roboto font-bold text-center uppercase text-2xl md:text-6xl p-'>Buy & Sell Digital Assets In The Coin Hub</motion.h1>
              <motion.h2
              initial={{ opacity: 0, translateY: -50 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 1 }}
              className='text-gray-300  text-md md:text-lg font-roboto mt-4 p-1 '
              >
                The best place to buy and sell crypto. Securely buy, sell, and build your cryptocurrency portfolio. 
              </motion.h2>
              <motion.button
              initial={{ opacity: 0, translateY: -50 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 1 }}
              className='bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-xl duration-200 text-white ml-4 md:ml-0 font-roboto font-bold md:text-lg p-2 md:p-4 rounded-full mt-8'
              >
                Get Started
              </motion.button>
              
            </div>

            <div>
            <motion.img
              initial={{ opacity: 0, translateY: -50 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 1 }}
              src="https://kriptomat.io/wp-content/uploads/2021/12/blockchain.png" className='mt-10 w-72 ml-7 md:ml-4 md:w-11/12' alt="" />
            </div>
            
          </div>
          </div>
          
          <Card></Card>
          <Work></Work>
          <Desc></Desc>
          <div className='bg-gray-800'>
          <div className='list container flex flex-wrap pt-20  pb-10'>
            {data.map((coin, i) => (
              <motion.div 
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 100 },
              }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={i} className='container p-3 space-x-16 items-center justify-center mx-auto w-32 md:w-60  md:pl-16'>
                <a href={coin.link}>
                <div className='border-2 border-gray-500 p-4 rounded-full'>
                    <div class="relative group">
                    <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600  blur rounded-full opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div class="relative  md:py-6 items-center bg-white rounded-full ring-1 ring-gray-900/5  leading-none flex items-top justify-start space-x-6">
                        <div className='items-center mx-auto justify-center '>
                        <img className='rounded-full object-scale-down  md:w-16 mx-auto h-20' src={coin.image} alt={coin.name} />
                        </div>
                        
                        
                    
                </div>
                </div>

                </div>
                <h1 className='text-white font-roboto text-center mt-4 text-xl'>{coin.name}</h1>
                </a>
              </motion.div>
              
            ))}
            
          </div>
          </div>
          
        </div>
        <Market></Market>
        <Footer></Footer>

        
      </div>
    );
  }

export default Home
