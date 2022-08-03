import React from 'react';
import { Link } from 'react-router-dom'

const navBar = () => {
  return(
    <div className='flex justify-center'>
      <div className='py-2 flex justify-center'>
        <div className='px-2'><button className='bg-white px-4 ring-2 ring-cyan-200 rounded-lg justify-center hover:ring-2 hover:ring-cyan-400 text-xl' onClick={()=>console.log('home clicked')}>Home</button></div>
        <div className='px-2'><button className='bg-white px-4 ring-2 ring-cyan-200 rounded-lg hover:ring-2 hover:ring-cyan-400 text-xl' onClick={()=>console.log('shop clicked')}>Shop</button></div>
        <div className='px-2'><button className='bg-white px-4 ring-2 ring-cyan-200 rounded-lg hover:ring-2 hover:ring-cyan-400 text-xl' onClick={()=>console.log('cart clicked')}>Cart</button></div>
      </div>
    </div>
  )  
}

export default navBar