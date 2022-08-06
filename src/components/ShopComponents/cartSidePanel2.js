import React from 'react';
import MakeCartItemCards from '../CartComponents/makeCartItemCards';
import TotalDisplay from '../CartComponents/TotalDisplay';
export default function CartSidePanel2(props){ 
  return (  
  <div className='sm:overflow-hidden lg:flex'>
    <div className='grid grid-cols-10'>
      <div className='col-start-2 col-span-5'><MakeCartItemCards total={props.total} inventory={props.inventory} removeFromCart={props.removeFromCart} addToCart={props.addToCart}/></div>
      <div className='col-start-7 col-span-4'><TotalDisplay total={props.total} inventory={props.inventory} removeFromCart={props.removeFromCart} addToCart={props.addToCart}/></div>
    </div>
  </div>
  )
}