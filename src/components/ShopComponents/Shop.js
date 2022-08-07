import React from 'react';
import Header from '../PageComponents/Header';
import NavBar from '../PageComponents/NavBar'
import ProductDisplay from './ProductDisplay';
import SideBar from '../SideBar'
import CartSidePanel2 from './cartSidePanel2';

const Shop = (props) => {
  
  return (
  <div>
    <div className= 'grid-rows-10 grid grid-cols-10 gap-2 /sm:flex /md:flex /md:grid-rows-10'>
      <div className="row-start-1 row-span-1 col-span-full"><Header/></div>
      <div className='row-start-2 row-span-1 col-span-full'><NavBar/></div>
      <div className='row-start-3 lg:col-span-1 md:sticky md:top-0 md:z-10 sm:col-span-3 md:col-span-3 border-r-2 border-t-2 border-cyan-300 shadow-lg rounded-md justify-center'>
        <SideBar 
        sortItemsByPrice = {props.sort}/>
      </div>
      <div className='gap-4 lg:col-span-7 lg:row-span-7 sm:col-span-4 md:col-span-4'>
        <ProductDisplay 
        products = {props.inventory} 
        updateInventory = {props.setInventory} 
        clickHandler = {props.clickHandler} /></div>
      <div className='lg:col-span-2  shadow-lg lg:visible sm:col-span-3 md:col-span-3 border-2 rounded-lg'>
        <CartSidePanel2 total={props.total} removeFromCart={props.removeFromCart} inventory={props.inventory} addToCart={props.addToCartHandler}/>
      </div>
  </div>
</div>

  )
}

export default Shop