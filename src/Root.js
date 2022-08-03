import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ProductDisplay from './components/ProductDisplay';
import SideBar from './components/SideBar';
import HomePage from './components/HomePage';
import Cart from './components/Cart'
import Shop from './components/Shop'
import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid'

const Root = () => {
  const [inventory, setInventory] = useState([
    {name: 'Amethyst',
     price: 50,
     id: '1'
    },
    
    {name: "Tiger's Eye",
     price: 25,
     id: '2'
    },
    
    {name: 'Tourmeline',
     price: 40,
     id: '3'},
    
     {name: 'Jade',
     price: 30,
     id: '4'},
    
     {name: 'Onyx',
      price: 25,
      id: '5'},
    
     {name: 'Garnet',
      price: 25,
      id: '6'},

      {name: "Je ne ce'st pas",
      price: 10,
      id: '7'},

      {name: 'Garnet',
      price: 25,
      id: '8'},

      {name: 'Rose Quartz',
      price: 15,
      id:'9'}
  ])

  const [cartTotal, updateTotal] = useState(0)

  const [cart, updateCart] = useState(
    []
  );

  const addToCartHandler = (inventory, id) => {
    console.log(inventory, id)
    const newCart = cart.map(element => element);
    inventory.forEach(item => {
      if (item.id === id){
      item.cartId = uniqid()
      newCart.push(item)
      updateCart(
        newCart
      )
      const newTotal = cartTotal + item.price
      updateTotal(newTotal)
    }
      console.log(cart)
    })
  }

  const removeFromCartHandler = (id) => {
    const newCart = cart.map(element => element);
    inventory.forEach(item => {
      if (item.cartId === id) {
        const index = newCart.indexOf(item)
        newCart.splice(index, 1)
        updateCart(newCart)
        updateTotal(cartTotal - item.price)
      }
    })
  }

  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='shop' element={<Shop inventory = {inventory} clickHandler = {addToCartHandler}/>} />
      <Route path='cart' element={<Cart total={cartTotal} inventory={inventory} removeFromCart={removeFromCartHandler} cartItems={cart}/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default Root