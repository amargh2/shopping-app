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
  //defining inventory (could probably export this somewhere)
  const [inventory, setInventory] = useState([
    {name: 'Amethyst',
     price: 50,
     id: '1',
     imgSrc: `images/amethyst.jpg`
    },
    
    {name: "Tiger's Eye",
     price: 25,
     id: '2',
     imgSrc:`images/tigerseye.jpg`
    },
    
    {name: 'Tourmeline',
     price: 40,
     id: '3',
     imgSrc: `images/tourmaline.jpg`
    },
    
     {name: 'Jade',
     price: 30,
     id: '4',
     imgSrc:`images/jade.jpg`
    },
    
    {name: 'Onyx',
     price: 25,
     id: '5',
     imgSrc:`images/tigerseye.jpg`
    },
    
    {name: 'Garnet',
     price: 25,
     id: '6',
     imgSrc:`images/amethyst.jpg`
    },

      {name: "Je ne ce'st pas",
      price: 10,
      id: '7',
      imgSrc:`images/tigerseye.jpg`
      },

      {name: 'Garnet',
      price: 25,
      id: '8',
      imgSrc:`images/tigerseye.jpg`
      },

      {name: 'Rose Quartz',
      price: 15,
      id:'9',
      imgSrc:'images/tigerseye.jpg'}
  ])
  //item sorter for sidebar
  const sortItemsByPrice = (choice) => {
    let newInventoryArray 
    if (choice === 'high-to-low') {
      newInventoryArray = inventory.map(item => item);
      newInventoryArray.sort((a,b) => {
      return b.price - a.price;
      })
      setInventory(newInventoryArray)

    } 
    if (choice === 'low-to-high') {
      const newInventoryArray = inventory.map(item => item);
      newInventoryArray.sort((a, b) => {
        return a.price - b.price
      })
      setInventory(newInventoryArray)

    }
    return
  }
  //setting total state, passed to Cart
  const [cartTotal, updateTotal] = useState(0)

  //setting Cart state (array of items)
  const [cart, updateCart] = useState(
    []
  );
  
  //click listener that updates cart when item is added from shop
  //passed to Shop
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
  //deletes item from cart (passed to Cart)
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
  //routing
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='shop' element={<Shop inventory = {inventory} clickHandler = {addToCartHandler} sort = {sortItemsByPrice}/>} />
      <Route path='cart' element={<Cart total={cartTotal} inventory={inventory} removeFromCart={removeFromCartHandler} cartItems={cart}/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default Root