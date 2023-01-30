import React from 'react';
import ItemCardsForCartPanel from './itemCardsForCartPanel.js';
import CartPanelTotalDisplay from './CartPanelTotalDisplay.js';
export default function CartSidePanel2(props){ 
  return (  
  <div className='flex justify-center rounded-lg py-4'>
    <div className='flex justify-center flex-col gap-3'>
      <div className='grid grid-cols-6 gap-4'>
        <div className='lg:col-start-2 flex lg:col-span-4'>
          <CartPanelTotalDisplay total={props.total} inventory={props.inventory} removeFromCart={props.removeFromCart} addToCart={props.addToCart}/>
        </div>
        <div className='row-start-2 col-span-full'>
          <ItemCardsForCartPanel removeAllOfSame={props.removeAllOfSame} addOne={props.addOne} total={props.total} qtyHandler={props.qtyHandler} inventory={props.inventory} removeFromCart={props.removeFromCart} addToCart={props.addToCart}/>
        </div>
    </div>
  </div>
  </div>
  )
}