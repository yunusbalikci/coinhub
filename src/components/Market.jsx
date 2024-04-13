import React from 'react'
import { useEffect , useState } from 'react'
import  axios  from 'axios'
import { motion } from "framer-motion"
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



function Market() {
  const controls = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
          controls.start('visible');
        } else {
          controls.start('hidden');
        }
      }, [controls, inView]);


    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
      async function fetchExchangeRates() {
        const assets = ['BTC', 'ETH', 'XRP', 'LTC', 'ADA', 'SOL', 'DOT', 'DOGE'];
        const exchangeRates = {};
    
        for (const asset of assets) {
          const response = await axios.get(`https://rest.coinapi.io/v1/exchangerate/${asset}/USD?apikey=6942835F-BE27-4508-9181-DCBD79CA5461`);
          exchangeRates[asset] = response.data.rate;
          // İstekler arasında 1 saniye bekleyin
          await new Promise(resolve => setTimeout(resolve, 3000));
        }
    
        setPortfolio(exchangeRates);
      }
      fetchExchangeRates();
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
        <h1 className='text-white font-roboto font-bold text-5xl mt-4 pt-2'>Market Update</h1>
        <div className='flex font-roboto text-white p-3 text-lg justify-between border-b-2 font-bold mt-10 rounded-lg w-full'>
            <h1>Coin</h1>
            <h1>Price</h1>
            <h1>24h Change</h1>
            <h1>Market Cap</h1>
        </div>

        <div className='font-roboto text-white mt-10 justify-between w-full'>
          {Object.entries(portfolio).map(([asset, exchangeRate]) => (
            <div className='flex justify-between border-b-2' key={asset}>
              <p className='ml-4 text-lg font-roboto font-bold'>{asset}</p>
              <p>{exchangeRate}</p>
              <img src="https://codewithsadee.github.io/cryptex/assets/images/chart-1.svg" alt="" />
              <p>€880,423,640,582</p>
              
            </div>
          ))}
        </div>
        
        <div>

        </div>
      </div>
    </motion.div>
  )
}

export default Market
