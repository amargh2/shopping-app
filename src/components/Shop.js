import React, { useState } from 'react';
import App from '../App';
import Header from './Header';
import NavBar from './NavBar'
import ProductDisplay from './ProductDisplay';
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const Shop = (props) => {
  
  return (
  <div>
    <div className= 'lg:grid-rows-10 lg:grid lg:grid-cols-10 gap-2 sm:flex flex-col md:grid md:grid-cols-3'>
    <div className="row-start-1 row-span-1 col-span-full"><Header/></div>
    <div className='row-start-2 row-span-1 col-span-full'><NavBar/></div>
    <div className='row-start-3 row-end-7 col-span-1 border-4 border-cyan-300 shadow-lg rounded-md flex justify-center'><SideBar/></div>
    <div className='row-start-3 gap-4 col-start-2 lg:col-span-7 lg:row-span-7 md:col-span-2'>
      <ProductDisplay 
      products = {props.inventory} 
      updateInventory = {props.setInventory} 
      clickHandler = {props.clickHandler} /></div>
  </div>
</div>

  )
}

export default Shop