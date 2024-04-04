import React from 'react'
import logo from '../images/btc.png'
function Header() {
  return (
    <div>
      <div className='justify-between p-4 flex text-white'>
        <img src={logo} className='w-20 h-20 ml-20' alt="" />
        <div className='flex mt-6 justify-center space-x-16'>
            <h3>Coins</h3>
            <h3>Favorite</h3>
            <h3>Market</h3>
        </div>
        <div className='mr-20 mt-6'>
            <button>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Header
