import React from 'react';
import ItemCardsForCartPanel from '../ShopComponents/itemCardsForCartPanel.js';
import CheckOutTotalDisplay from './CheckoutTotalDisplay.js';

export default function CartPanel(props){ 
  return (  
  <div className='px-4 flex justify-center rounded-lg py-4'>
      <div className='grid grid-cols-6 gap-4'>
        <div className='col-span-full'>
          <ItemCardsForCartPanel removeAllOfSame={props.removeAllOfSame} addOne={props.addOne} total={props.total} qtyHandler={props.qtyHandler} inventory={props.inventory} removeFromCart={props.removeFromCart} addToCart={props.addToCart}/>
        </div>
        <div className='row-start-2 col-span-full'>
        <CheckOutTotalDisplay total={props.total} inventory={props.inventory} removeFromCart={props.removeFromCart} addToCart={props.addToCart}/>
        </div>
    </div>
  </div>
  )
}