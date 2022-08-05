import React from 'react';
import { Link } from 'router-react-dom';

const totalDisplay = (props) =>  (   
  <div className='col-start-6 rounded-lg shadow-sm shadow-indigo-400 sticky top-0 row-start-1 row-span-full border-2 col-span-3 text-xl flex justify-center font-semibold flex-col'>
    <ul className='flex-col justify-center'>
    {props.inventory.map(item => {
      if (item.numberInCart > 0) {
        return (<li className='flex justify-center'>{item.name}, ${item.price} x {item.numberInCart}</li>)
      }
    })
    }
    </ul>
    <div className='flex justify-center'>
      <p>Current Total: {props.total}</p>
    </div>
    <div className = 'flex justify-center gap-2'>
      <button className='ring-2 ring-cyan-200 hover:ring-2 hover:ring-cyan-400 rounded-lg px-2'>Checkout</button> 
      <Link to='/shop'><button className='ring-2 ring-cyan-200 rounded-lg px-2'>Keep Shopping</button></Link></div>
    </div>)

export default totalDisplay