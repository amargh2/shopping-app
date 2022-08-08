import React from 'react';
import Header from '../PageComponents/Header';
import NavBar from '../PageComponents/NavBar'
import ProductDisplay from './ProductDisplay';
import SideBar from '../SideBar'
import CartSidePanel2 from './cartSidePanel2';

const Shop = (props) => {
  
  return (
  <div>
      <div><Header/></div>
      <div className='bottom-0 fixed inset-x-0 py-2 bg-white md:relative'><NavBar/></div>
      <div className='lg:grid md:grid grid-cols-10 gap-4 py-4'>
        <div className='col-span-2 border-r-2 border-t-2 border-cyan-300 shadow-lg rounded-md justify-center'>
          <SideBar
          sortItemsByPrice = {props.sort}/>
        </div>
        <div className='lg:col-span-7 md:col-span-7 col-span-3 lg:px-0 py-2 px-10'>
          <ProductDisplay
          products = {props.inventory}
          updateInventory = {props.setInventory}
          clickHandler = {props.clickHandler} /></div>
        <div className='lg:flex col-span-2'>
          <CartSidePanel2 total={props.total} removeFromCart={props.removeFromCart} inventory={props.inventory} addToCart={props.addToCartHandler}/>
        </div>
      </div>
  </div>

  )
}

export default Shop