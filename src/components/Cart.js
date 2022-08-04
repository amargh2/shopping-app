import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import Shop from './Shop'
import {useOutletContext} from 'react-router-dom'
import {Link, Outlet} from 'react-router-dom'

const Cart = (props) => {
  const total = props.total
  //cart display iterates through the cart items and displays the items on cards
  //it also takes the total, lists the items succinctly, 
  //and offers checkout/keep shopping option
  //it takes both these items and populates them in a two-column grid
  const cartDisplay = () => {
    const manipulableCart = props.cartItems.map(item => item)
    const displayCartItems = manipulableCart.map(item => {
      return (        
        <div className = 'border-2 col-start-3 col-span-3 justify-center shadow-lg shadow-indigo-400 py-2 w-3/4 font-semibold gap-2 rounded-lg'>
          <div><img className='rounded' src={item.imgSrc} alt='product'></img></div>
          <div className ='flex justify-center'>{item.name}</div>
          <div className='flex justify-center'>${item.price}</div>
          <div className='flex justify-center'><button id={item.cartId} onClick={(event) => props.removeFromCart(event.target.id)}>X</button></div>
        </div>  
      )})
  const totalDisplay = (   
    <div className='col-start-6 rounded-lg shadow-sm shadow-indigo-400 sticky top-0 row-start-1 row-span-full border-2 col-span-3 text-xl flex justify-center font-semibold flex-col'>
      <ul className='flex-col justify-center'>
        {props.cartItems.map(item=>(<li className='flex justify-center'>{item.name}</li>))}
      </ul>
      <div className='flex justify-center'>
        <p>Current Total: {total}</p>
      </div>
      <div className = 'flex justify-center gap-2'>
        <button className='ring-2 ring-cyan-200 hover:ring-2 hover:ring-cyan-400 rounded-lg px-2'>Checkout</button> 
        <Link to='/shop'><button className='ring-2 ring-cyan-200 rounded-lg px-2'>Keep Shopping</button></Link></div>
      </div>)
    return (
      <div className='lg:grid lg:grid-cols-10 gap-2'>
        {displayCartItems}
        {totalDisplay}
      </div>)
    }

  //checks the cart -- if empty, tells the user to go add items to their cart
  function chooseOutput() {
    let emptyOrFull
    if (props.total === 0) {
      emptyOrFull = (<div className = 'flex justify-center'>Your cart is currently empty! Visit the shop and add some items to your cart!</div>)
    } if (total !== 0) {
      emptyOrFull = cartDisplay()
      }  return (
      <div>{emptyOrFull}</div>
      )
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
