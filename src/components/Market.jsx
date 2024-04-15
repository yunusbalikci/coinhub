import React from 'react'
import { useEffect , useState } from 'react'
import  axios  from 'axios'
import { motion } from "framer-motion"
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



function Market() {
  const [coins, setCoins] = useState([]);
  const controls = useAnimation();
  const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
          controls.start('visible');
        } else {
          controls.start('hidden');
        }
      }, [controls, inView]);

      useEffect(() => {
        const fetchData = async () => {
          const options = {
            method: 'GET',
            url: 'https://coinranking1.p.rapidapi.com/coins',
            params: {
              referenceCurrencyUuid: 'yhjMzLPhuIDl',
              timePeriod: '24h',
              'tiers[0]': '1',
              orderBy: 'marketCap',
              orderDirection: 'desc',
              limit: '6',
              offset: '0'
            },
            headers: {
              'X-RapidAPI-Key': '0b84405b6dmshf6c0eb56a7e9f99p1444ffjsn3ed18b438854',
              'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
            }
          };
    
          try {
            const response = await axios.request(options);
            setCoins(response.data.data.coins);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);
    
    

  return (
    <motion.div
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={{
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: 100 },
    }}
    transition={{ duration: 0.5 }}>
      <div className='container pb-10'>
        <h1 className='text-white font-roboto font-bold text-xl ml-4 md:ml-0 md:text-5xl mt-4 pt-2'>Market Update</h1>
        <div className='flex font-roboto text-white p-3 text-lg justify-between border-b-2 font-bold mt-10 rounded-lg w-full'>
            <h1 className='w-48 md:w-64 text-sm md:text-lg'>Name</h1>
            <h1 className='text-sm md:text-lg'>Last Price</h1>
            <h1 className='text-sm md:text-lg'>24h Change</h1>
            <h1 className='text-sm md:text-lg'>Last 7 Days</h1>
            <h1 className='text-sm md:text-lg'>Market Cap</h1>
        </div>

        <div className='font-roboto text-white  justify-between w-full  md:overflow-hidden'>

          {coins.map((coin) => (
          <motion.div
          initial={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          className='flex w-full justify-between border-b-2 pt-4 space-x-4 hover:bg-gray-800 duration-200' key={coin.id}>
            <div className='flex w-48 md:w-64'>
              <img src={coin.iconUrl} className='w-4 md:w-8 mb-1 invisible md:visible' alt="" />
              <p className='md:ml-4 text-xs md:text-lg font-roboto whitespace-nowrap pt-1 font-bold'>{coin.name}</p>
              <p className='font-roboto text-xs md:text:md ml-4 mt-2 text-gray-400'>{coin.symbol}</p>
            </div>
            <p className='font-roboto font-bold text-xs md:text-lg'>${(coin.price).substring(10,0)}</p>
            {coin.change > 0 ? (<p className='font-roboto text-xs md:text-lg  text-green-500'>{coin.change}%</p>) : (<p className='font-roboto text-xs md:text-lg text-red-500'>{coin.change}%</p>)}
            {coin.change > 0 ? (<img className='w-10 md:w-auto' src='https://codewithsadee.github.io/cryptex/assets/images/chart-1.svg'></img>) : (<img className='w-10 md:w-auto' src='https://codewithsadee.github.io/cryptex/assets/images/chart-2.svg'></img>)}
            <p className='font-roboto font-bold text-xs md:text-lg'>{(coin.marketCap).substring(8,0)}</p>
          </motion.div>
        ))}
        </div>
        
        <div>

        </div>
      </div>
    </motion.div>
  )
}

export default Market
