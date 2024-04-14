import React from 'react'
import { AiOutlineUser } from "react-icons/ai";
import logo from '../images/logo.png'

function Header() {
  return (
    <div>
      <div className='justify-between p-4 flex container text-white'>
        <div className='flex'>
          <img src={logo} className='absolute mt-3 ml-4' width={50} alt="" />
          <h1 className='font-roboto pt-5 text-3xl font-bold ml-20'>COINHUB</h1>
        </div>
        <div className='flex mt-6 font-roboto text-lg justify-center space-x-16'>
            <h3 className='cursor-pointer'>Coins</h3>
            <h3 className='cursor-pointer'>Favorite</h3>
            <h3 className='cursor-pointer'>Market</h3>
        </div>
        <div className='mr-20 font-roboto text-lg mt-4'>
                <a href='#' class="relative cursor-pointer inline-flex items-center justify-start inline-block px-4  py-2 overflow-hidden font-bold rounded-full group">
                <AiOutlineUser  className='inline-block mr-2 mb-0.5 w-8 group-hover:text-black' />
                <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">Login</span>
                <span class="absolute inset-0 border-2 border-white rounded-full"></span>
                </a>
        </div>
      </div>
    </div>
  )
}

export default Header
