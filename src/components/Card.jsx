import React from 'react'
import { motion } from "framer-motion";

const data = [
    {
        "name": "Bitcoin",
        "id": "bitcoin",
        "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
        "link": "https://bitcoin.org/",
        "price": 63.126,
        
    },
    {
        "name": "Ethereum",
        "id": "ethereum",
        "image": "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
        "link": "https://ethereum.org/",
        "price":3.055,
        
    },
    {
        "name": "Binance",
        "id": "binancecoin",
        "image": "https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png",
        "link": "https://www.binance.com/en/",
        "price":557.70
    },
    {
        "name": "Solana",
        "id": "solana",
        "image": "https://assets.coingecko.com/coins/images/4128/large/coinmarketcap-solana-200.png",
        "link": "https://solana.com/",
        "price": 142.51
    },
]

function Card() {
  return (
    <motion.div
    initial={{ opacity: 0, translateY: 50 }}
    animate={{ opacity: 1, translateY: 0 }}
    transition={{ duration: 0.5 }}
    className='container md:flex justify-between p-4 w-11/12  border md:h-48 rounded-xl mt-20'>
        {data.map((item) => (
             <div className='mt-2 active:bg-gray-700 w-full md:w-64 rounded-xl p-2'>
                <div className='flex space-x-2'>
                    <img src={item.image} className='w-6 h-6' alt="" />
                    <h1 className='font-roboto font-bold text-white'>{item.name}</h1>
                </div>
                <h1 className='text-white font-roboto md:text-2xl mt-4 md:mt-2 font-bold'>EUR {item.price}</h1>
                <a href={item.link} class="relative inline-flex items-center justify-start inline-block px-2 md:px-4 mt-4 py-2 overflow-hidden font-bold rounded-full group">
                <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">View Details</span>
                <span class="absolute inset-0 border-2 border-white rounded-full"></span>
                </a>

            </div>
        ))}
      
    </motion.div>
  )
}

export default Card
