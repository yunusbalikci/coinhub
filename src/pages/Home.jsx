import React from 'react'
import Header from '../components/Header'
import { motion } from "framer-motion";
import Market from '../components/Market';



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
    return (
      <div className='bg-gradient-to-b from-slate-600 to-slate-900'>
        <Header />
        <div>
          <motion.h1
          initial={{ opacity: 0, translateY: -50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
          className='bg-gradient-to-r from-sky-700 via-violet-600 to-purple-900 bg-clip-text text-transparent font-space-grotesk  font-bold text-center uppercase text-8xl mt-20'>Welcome to Coin Hub</motion.h1>
          <motion.h2
          initial={{ opacity: 0, translateY: -50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
          className='text-white font-space-grotesk text-center text-5xl uppercase mt-10 pb-20'>Your favorite cryptocurrency tracker</motion.h2>
          <div className='container flex flex-wrap mt-10 pb-2'>
            {data.map((coin, i) => (
              <motion.div 
              initial={{ opacity: 0, translateY: 50 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={i} className='container p-3 space-x-16 items-center justify-center mx-auto  w-60  pl-16'>
                <a href={coin.link}>
                <div className='border-2 border-gray-500 p-4 rounded-full'>
                    <div class="relative group">
                    <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600  blur rounded-full opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div class="relative  py-6 items-center bg-white rounded-full ring-1 ring-gray-900/5  leading-none flex items-top justify-start space-x-6">
                        <div className='items-center mx-auto justify-center pl-6'>
                        <img className='rounded-full object-scale-down w-16 mx-auto h-20' src={coin.image} alt={coin.name} />
                        </div>
                        
                        <div class="space-y-2">
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
        <Market></Market>

      </div>
    );
  }

export default Home
