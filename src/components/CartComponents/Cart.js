import React from 'react'
import Header from '../PageComponents/Header'
import NavBar from '../PageComponents/NavBar'
import MakeCartItemCards from './makeCartItemCards'
import TotalDisplay from './TotalDisplay'

const Cart = (props) => {
  //checks the cart -- if empty, tells the user to go add items to their cart
    function chooseOutput() {
      if (props.total === 0) {
        return (<div className = 'flex justify-center py-10 font-medium'>Your cart is currently empty! Visit the shop and add some items to your cart!</div>)
      } if (props.total !== 0) {
        return(
        <div className='grid sm:grid-cols-2 lg:grid-cols-10 py-10'>
          <div className='col-start-3 col-span-3'>
            <MakeCartItemCards
            inventory={props.inventory}
            total={props.total}
            removeFromCart={props.removeFromCart}
            addToCart={props.addToCartHandler}/>
          </div>
          <div className='col-start-6 col-span-2 row-start-1'>
            <TotalDisplay
            total={props.total}
            inventory={props.inventory}
            removeFromCart={props.removeFromCart}
            addToCart={props.addToCartHandler}/>
          </div>
      
      
       </div>)
        }  
    }
    
    console.log(chooseOutput())
  
  return (
      <div>
        <Header/>
        <NavBar/>
          <div>
              <div>{chooseOutput()}</div>
        
            </div>
          </div>
  )
}

export default Cart
