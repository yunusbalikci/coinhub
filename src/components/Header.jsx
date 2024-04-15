import React from 'react'
import logo from '../images/logo.png'
import { CiMenuBurger } from "react-icons/ci";
import { useState } from 'react';

function Header() {
  const [open, setOpen] = useState(false)

  const hamburgerMenu = () => {
    setOpen(!open)
  }

  return (
    <div>
      <div className='justify-between  flex container text-white'>
        <div className='flex'>
          <img src={logo} className='absolute mt-3 ml-8 md:ml-4 w-10 md:w-14' alt="" />
          <h1 className='font-roboto pt-5 text-lg md:text-3xl font-bold ml-20'>COINHUB</h1>
        </div>
        <div className='flex invisible md:visible mt-6 font-roboto text-lg md:space-x-8 justify-between'>
            <h3 className='cursor-pointer'>Coins</h3>
            <h3 className='cursor-pointer'>Favorite</h3>
            <h3 className='cursor-pointer'>Market</h3>
        </div>
        <div className='md:hidden'>
          <CiMenuBurger onClick={hamburgerMenu} className='mt-6 mr-4 text-xl cursor-pointer text-white' />
          {
            open ? (
              <div className='bg-gray-800 absolute top-16 right-0 w-48 h-48 rounded-lg'>
                <h3 className='text-white  hover:bg-gray-700 duration-200 p-2 rounded-xl font-roboto text-lg mt-4 ml-2 mr-2'>Coins</h3>
                <h3 className='text-white hover:bg-gray-700 duration-200 p-2 rounded-xl font-roboto text-lg mt-4 ml-2 mr-2'>Favorite</h3>
                <h3 className='text-white hover:bg-gray-700 duration-200 p-2 rounded-xl font-roboto text-lg mt-4 ml-2 mr-2'>Market</h3>
              </div>
            ) : null
          }
        </div>
      </div>
    </div>
  )
}

export default Header
