import React from 'react';
import Header from '../PageComponents/Header';
import NavBar from '../PageComponents/NavBar'
import ProductDisplay from './ProductDisplay';
import SideBar from '../SideBar'
import CartSidePanel2 from './cartSidePanel2';
import SortButton from './SortButton';
import CartButton from './CartButton';
const Shop = (props) => {
  
  return (
  <div>
      <div><Header/></div>
      <div className='bottom-0 fixed inset-x-0 py-2 bg-white md:relative'><NavBar cartItemCount={props.cartItemCount}/></div>
      <div className='lg:grid md:grid grid-cols-10 gap-4 py-4'>
        <div className='col-span-2 lg:col-span-1 border-r-2 border-t-2 border-cyan-300 shadow-lg rounded-md justify-center'>
          <SortButton
          sort = {props.sort}/>
        </div>
        <div className='lg:col-span-7 md:col-span-6 col-span-2 lg:px-0 py-2'>
          <ProductDisplay
          products = {props.inventory}
          updateInventory = {props.setInventory}
          clickHandler = {props.clickHandler} 
          qtyHandler={props.qtyHandler}/></div>
        <div className='md:flex md:col-span-2 lg:col-span-2 flex-col hidden'>
          <CartButton 
          cartItemCount={props.cartItemCount} 
          removeAllOfSame={props.removeAllOfSame} 
          addOne={props.addOne} total={props.total} 
          qtyHandler={props.qtyHandler} 
          removeFromCart={props.removeFromCart} 
          inventory={props.inventory} 
          addToCart={props.addToCart}/>
        </div>
      </div>
  </div>

  )
}

export default Shop