import React from 'react'
import { useEffect , useState } from 'react'
import  axios  from 'axios'

function Market() {

    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        async function fetchExchangeRates() {
          const assets = ['BTC', 'ETH', 'XRP'];
          const promises = assets.map(asset =>
            axios.get(`https://rest.coinapi.io/v1/exchangerate/${asset}/USD?apikey=6942835F-BE27-4508-9181-DCBD79CA5461`)
          );
          const responses = await Promise.all(promises);
          const exchangeRates = responses.reduce((acc, response, index) => {
            acc[assets[index]] = response.data.rate;
            return acc;
          }, {});
          setPortfolio(exchangeRates);
        }
        fetchExchangeRates();
      }, []);

  return (
    <div>
      <div className='container'>
        <div className='flex font-roboto text-white p-3 text-lg justify-between bg-gradient-to-r from-violet-600 to-indigo-600 mt-10 rounded-lg w-full'>
            <h1>Coin</h1>
            <h1>Price</h1>
            <h1>24h Change</h1>
            <h1>Market Cap</h1>
        </div>

        <div>

        </div>
      </div>
    </div>
  )
}

export default Market
