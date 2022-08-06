import React, { useState } from 'react';
import App from '../../App';
import Header from '../PageComponents/Header';
import NavBar from '../PageComponents/NavBar'
import ProductDisplay from './ProductDisplay';
import SideBar from '../SideBar'
import Cart from '../CartComponents/Cart';
import CartSidePanel from './CartSidePanel';
import { Outlet } from 'react-router-dom'
import ShowItemsInCart from '../CartComponents/makeCartItemCards';
import CartSidePanel2 from './cartSidePanel2';
const Shop = (props) => {
  
  return (
  <div>
    <div className= 'lg:grid-rows-10 lg:grid lg:grid-cols-10 gap-2 sm:flex flex-col md:grid md:grid-cols-3'>
    <div className="row-start-1 row-span-1 col-span-full"><Header/></div>
    <div className='row-start-2 row-span-1 col-span-full'><NavBar/></div>
    <div className='row-start-3 row-end-7 col-span-1 border-r-2 border-t-2 border-cyan-300 shadow-lg rounded-md flex sm:flex justify-center'>
      <SideBar 
      sortItemsByPrice = {props.sort}/>
    </div>
    <div className='gap-4 col-start-4 lg:col-span-7 lg:row-span-7 md:col-span-2'>
      <ProductDisplay 
      products = {props.inventory} 
      updateInventory = {props.setInventory} 
      clickHandler = {props.clickHandler} /></div>
    <div className='col-start-9 col-span-2'>
      <CartSidePanel2 total={props.total} removeFromCart={props.removeFromCart} inventory={props.inventory} addToCart={props.addToCartHandler}/>
    </div>
  </div>
</div>

  )
}

export default Shop