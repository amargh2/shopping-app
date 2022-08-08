import React from 'react';
import { Link } from 'react-router-dom'

const CartPanelTotalDisplay = (props) =>  (   
  <div className='py-10 col-start-6 px-3 rounded-lg shadow-sm shadow-indigo-400 row-start-1 row-span-full border-2 font-medium flex justify-center flex-col'>
    <ul className='flex-col justify-center'>
    {props.inventory.map(item => {
      if (item.numberInCart > 0) {
        return (<li className='flex justify-center'>{item.name}, ${item.price} x {item.numberInCart}</li>)
      }
    })
    }
    </ul>
    <div className='flex justify-center'>
      <div className='flex justify-center'>Total: {props.total}</div>
    </div>
    <div className = 'flex justify-center gap-2'>
      <button className='ring-2 ring-cyan-200 hover:ring-2 hover:ring-cyan-400 rounded-lg px-2'>Checkout</button> 
    </div>
    <div className = 'flex justify-center gap-2'>
      <Link to='/cart'><button className='ring-2 ring-cyan-200 hover:ring-2 hover:ring-cyan-400 rounded-lg px-2'>Go To Cart</button></Link> 
    </div>
  </div>)

export default CartPanelTotalDisplay