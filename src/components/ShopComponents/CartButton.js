import React, { useState } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import CartSidePanel2 from './cartSidePanel2';
const CartButton = (props) => {
  const [open, setOpen] = useState(true)
  return ( 
      <div className='flex flex-col items-center'>
        <div className='flex justify-center'>
          <button onClick={()=> setOpen(open => !open)} className="flex justify-center rounded-lg ring-2 ring-cyan-400 hover:ring-4">
            <h1><ShoppingCartIcon className='h-8 w-8'/></h1>
            <div className='font-semibold'>{props.cartItemCount()}</div>
          </button>
        </div>
      
      {open && <CartSidePanel2 removeAllOfSame={props.removeAllOfSame} addOne={props.addOne} total={props.total} qtyHandler={props.qtyHandler} removeFromCart={props.removeFromCart} inventory={props.inventory} addToCart={props.addToCart}/>}
      </div>
  )
}


export default CartButton