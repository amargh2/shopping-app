import React from 'react';
import { Link } from 'react-router-dom';
const TotalDisplay = (props) =>  (   
  <div className='py-10 col-start-6 px-3 rounded-lg gap-2 shadow-sm shadow-indigo-400 sticky top-10 row-start-1 row-span-full border-2 col-span-3 text-xl flex justify-center font-semibold flex-col'>
    <ul className='flex-col justify-center'>
    {props.inventory.map(item => {
      if (item.numberInCart > 0) {
        return (<li key={item.id} className='flex justify-center'>{item.name}, ${item.price} x {item.numberInCart}</li>)
      }
    })
    }
    </ul>
    <div className='flex justify-center'>
      <div className='flex justify-center'>Total: ${props.total}</div>
    </div>
    <div className = 'flex justify-center gap-2'>
      <Link to='/checkout'><button className='ring-2 ring-cyan-200 hover:ring-2 hover:ring-cyan-400 rounded-lg px-2'>Checkout</button></Link> 
    </div>
    <div className='flex justify-center'>
      <button onClick={() => {props.emptyCart()}} className='ring-2 ring-cyan-200 hover:ring-2 hover:ring-cyan-400 rounded-lg px-2'>Empty Cart</button>
    </div>
  </div>)

export default TotalDisplay