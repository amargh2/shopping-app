import React from 'react';
import ItemCardsForCartPanel from './itemCardsForCartPanel.js';
import TotalDisplay from '../CartComponents/TotalDisplay';
import { ShoppingCartIcon } from '@heroicons/react/outline';

export default function CartSidePanel2(props){ 
  return (  
  <div className='px-4 flex justify-center rounded-lg py-4'>
    <div className='flex justify-center flex-col gap-3'>
      <div className= 'flex justify-center'>
        <button class="rounded-lg ring-2 ring-cyan-400 hover:ring-4">
          <h1><ShoppingCartIcon className='h-8 w-8'/></h1>
        </button>
      </div>
      <div className='grid grid-cols-6'>
      <div className='col-start-2 col-span-4'><TotalDisplay total={props.total} inventory={props.inventory} removeFromCart={props.removeFromCart} addToCart={props.addToCart}/></div>
      <div className='row-start-2 col-span-full'><ItemCardsForCartPanel total={props.total} inventory={props.inventory} removeFromCart={props.removeFromCart} addToCart={props.addToCart}/></div>
    </div>
  </div>
  </div>
  )
}