import React from 'react';
import { Link, Navigate, Outlet } from 'react-router-dom'

const navBar = (props) => {
  return(
    <div className='shadow-lg'>
      <div className='py-2 flex justify-center'>
        <div className='px-2'>
          <Link to='/'> 
          <button className='bg-white px-4 ring-2 ring-cyan-200 rounded-lg justify-center hover:ring-2 hover:ring-cyan-400 text-xl'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </button>
          </Link>
        </div>
        <div className='px-2'>
          <Link to='/shop'>
            <button 
            className='bg-white px-4 ring-2 ring-cyan-200 rounded-lg hover:ring-2 hover:ring-cyan-400 text-xl' 
            onClick={()=>console.log('shop clicked')}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
          </button>
          </Link>
        </div>
        <div className='px-2'>
          <Link to='/cart'>
            <button 
            className='bg-white px-4 ring-2 ring-cyan-200 rounded-lg hover:ring-2 hover:ring-cyan-400 text-xl' 
            onClick={()=>console.log('cart clicked')}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
            </Link>
            </div>
        </div>
        <Outlet></Outlet>
      </div>
    
  )  
}

export default navBar