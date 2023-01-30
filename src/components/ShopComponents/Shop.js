import React from 'react';
import Header from '../PageComponents/Header';
import NavBar from '../PageComponents/NavBar'
import ProductDisplay from './ProductDisplay';
import SortButton from './SortButton';
import CartButton from './CartButton';
const Shop = (props) => {
  
  return (
  <div>
      <div className='justify-center lg:hidden sm:flex'>
        <Header></Header>
      </div>
      <div className='bottom-0 fixed inset-x-0 bg-white md:relative'>
        <NavBar cartItemCount={props.cartItemCount}/>
      </div>
      <div className='lg:grid md:grid grid-cols-12 gap-4 py-4'>
        <div className='col-span-2 md:col-span-3 lg:col-span-2 shadow-lg rounded-md justify-center md:border-r-2 md:border-cyan-200 md:border-t-2'>
          <SortButton
          sort = {props.sort}/>
        </div>
        <div className='lg:col-span-8 md:col-span-7 col-span-2 lg:px-0 px-2'>
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