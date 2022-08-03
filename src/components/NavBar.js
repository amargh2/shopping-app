import React from 'react';
import { Link, Navigate, Outlet } from 'react-router-dom'

const navBar = (props) => {
  return(
    <div className='flex justify-center'>
      <div className='py-2 flex justify-center'>
        <div className='px-2'>
          <Link to='/'> <button className='bg-white px-4 ring-2 ring-cyan-200 rounded-lg justify-center hover:ring-2 hover:ring-cyan-400 text-xl'>Home</button></Link>
        </div>
        <div className='px-2'>
          <Link to='/shop'><button className='bg-white px-4 ring-2 ring-cyan-200 rounded-lg hover:ring-2 hover:ring-cyan-400 text-xl' onClick={()=>console.log('shop clicked')}>Shop</button></Link></div>
        <div className='px-2'>
          <Link to='/cart'><button className='bg-white px-4 ring-2 ring-cyan-200 rounded-lg hover:ring-2 hover:ring-cyan-400 text-xl' onClick={()=>console.log('cart clicked')}>Cart</button></Link></div>
      </div>
      <Outlet></Outlet>
    </div>
    
  )  
}

export default navBar