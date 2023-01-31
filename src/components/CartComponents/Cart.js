import React from 'react'
import Header from '../PageComponents/Header'
import NavBar from '../PageComponents/NavBar'
import MakeCartItemCards from './makeCartItemCards'
import TotalDisplay from './TotalDisplay'
import { Link } from 'react-router-dom'
const Cart = (props) => {
  //checks the cart -- if empty, tells the user to go add items to their cart
    function chooseOutput() {
      if (props.total === 0) {
        return (<div className = 'flex flex-col items-center gap-2 justify-center p-10 font-medium'>Your cart is currently empty! Visit the shop and add some items to your cart!
                <Link to='/shop'>
                  <button
                    className="rounded-md bg-cyan-400 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      Go to the shop
                  </button>
              </Link>
                </div>)
      } if (props.total !== 0) {
        return(
        <div className='grid sm:grid-cols-2 lg:grid-cols-10 py-10 px-2'>
          <div className='col-start-3 col-span-3'>
            <MakeCartItemCards
            inventory={props.inventory}
            total={props.total}
            removeAllOfSame={props.removeAllOfSame}
            removeFromCart={props.removeFromCart}
            addToCart={props.addToCart}/>
          </div>
          <div className='col-start-6 col-span-2 row-start-1'>
            <TotalDisplay
            total={props.total}
            inventory={props.inventory}
            removeFromCart={props.removeFromCart}
            removeAllOfSame={props.removeAllofSame}
            addToCart={props.addToCart}
            emptyCart={props.emptyCart}/>
          </div>
      
      
       </div>)
        }  
    }
    
    console.log(chooseOutput())
  
  return (
      <div>
      <div className='justify-center lg:hidden sm:flex'>
        <Header></Header>
      </div>        
      <NavBar cartItemCount={props.cartItemCount}/>
          <div>
              <div>{chooseOutput()}</div>
        
            </div>
          </div>
  )
}

export default Cart
