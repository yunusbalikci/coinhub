import React from 'react'
import logo from '../images/btc.png'
function Header() {
  return (
    <div>
      <div className='justify-between p-4 flex text-white'>
        <h1 className='font-space-grotesk pt-5 text-3xl font-bold ml-20'>COINHUB</h1>
        <div className='flex mt-6 font-roboto text-lg justify-center space-x-16'>
            <h3 className='cursor-pointer'>Coins</h3>
            <h3 className='cursor-pointer'>Favorite</h3>
            <h3 className='cursor-pointer'>Market</h3>
        </div>
        <div className='mr-20 font-roboto text-lg mt-6'>
            <button>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Header
