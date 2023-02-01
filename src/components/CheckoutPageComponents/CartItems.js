import React, { useState } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import CartSidePanel2 from './cartSidePanel2';
const CartButton = (props) => {
  return ( 
      <div className='flex flex-col items-center'>
        <CartSidePanel2 removeAllOfSame={props.removeAllOfSame} addOne={props.addOne} total={props.total} qtyHandler={props.qtyHandler} removeFromCart={props.removeFromCart} inventory={props.inventory} addToCart={props.addToCart}/>}
      </div>
  )
}