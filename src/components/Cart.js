import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import Shop from './Shop'
import {useOutletContext} from 'react-router-dom'

const Cart = (props) => {
  const total = props.total

  function chooseOutput() {
    let emptyOrFull
    if (props.total === 0) {
      emptyOrFull = (<div>Your cart is currently empty! Buy some dang crystals!</div>)
    } if (total !== 0) {
      emptyOrFull = props.cartItems.map(item => {
          return (
          <div className='border-2 border-yellow-400 rounded-lg flex justify-center py-2'>
            <div className = 'flex-col px-20 font-semibold gap-2 shadow-lg rounded-lg'>
              <div>{item.name}</div>
              <div>${item.price}</div>
              <div><button id={item.cartId} onClick={(event) => props.removeFromCart(event.target.id)}>X</button></div>
            </div>
          </div>)})
      const totalAndCheckOut = (
        <div className='text-xl flex justify-center font-semibold flex-col'>
          <p>Current Total: {total}</p>
          <div className = 'flex gap-2'>
          <button className='ring-2 ring-cyan-400 rounded-lg px-2'>Checkout</button> 
          <button className='ring-2 ring-cyan-400 rounded-lg px-2'>Keep Shopping</button></div>
        </div>)
      emptyOrFull.push(totalAndCheckOut)  
    } 
    return emptyOrFull
  }



  return (
    <div>
      <Header/>
      <NavBar/>
      <div className='flex justify-center'>
        <div classname='px-4'>
          {chooseOutput()}
        </div>
      </div>
    </div>
  )
}


export default Cart