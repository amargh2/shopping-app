import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/PageComponents/HomePage';
import Cart from './components/CartComponents/Cart'
import Shop from './components/ShopComponents/Shop'
import React, { useState } from 'react';
import CheckoutPage from './components/CheckoutPageComponents/CheckoutPage';
import './App.css'
const Root = () => {  
  const cleanInventory = [
    {name: 'Amethyst',
     price: 10,
     id: '1',
     imgSrc: `images/amethyst.jpg`,
     numberInCart:0,
     numberSelected:1
     //stock could go here
    },
    
    {name: "Tiger's Eye",
     price: 12,
     id: '2',
     imgSrc:`images/tigerseye.jpg`,
     numberInCart:0,
     numberSelected:1
    },
    
    {name: 'Lapis Lazuli',
     price: 12,
     id: '3',
     imgSrc: `images/lapislazuli.jpg`,
     numberInCart:0,
     numberSelected:1
    },
    
     {name: 'Malachite',
     price: 30,
     id: '4',
     imgSrc:`images/malachite.jpg`,
     numberInCart:0,
     numberSelected:1
    },
    
    {name: 'Onyx',
     price: 25,
     id: '5',
     imgSrc:`images/onyx.jpg`,
     numberInCart:0,
     numberSelected:1
    },
    
    {name: 'Red Jasper',
     price: 10,
     id: '6',
     imgSrc:`images/red_jasper.jpg`,
     numberInCart:0,
     numberSelected:1
    },

      {name: "Carnelian",
      price: 10,
      id: '7',
      imgSrc:`images/carnelian.jpg`,
      numberInCart:0,
      numberSelected:1
      },

      {name: 'Crystal Quartz',
      price: 25,
      id: '8',
      imgSrc:`images/download.jpeg`,
      numberInCart:0,
      numberSelected:1
      },

      {name: 'Rose Quartz',
      price: 15,
      id:'9',
      imgSrc:'images/rosequartz.jpg',
      numberInCart:0,
      numberSelected:1
    },

    {name: 'Topaz Obelisk',
    price: 150,
    id: '10',
    imgSrc: 'images/topaz.jpg',
    numberInCart: 0,
    numberSelected: 1
    },

    {name: 'Blue Geode',
    price: 150,
    id: '11',
    imgSrc: 'images/geode1.jpeg',
    numberInCart: 0,
    numberSelected: 1
    },

    {name: 'Amethyst Geode',
    price: 150,
    id: '12',
    imgSrc: 'images/geode2.jpg',
    numberInCart: 0,
    numberSelected: 1
    },
    

  ]

  //defining inventory (could probably export this somewhere)
  const [inventory, setInventory] = useState(cleanInventory)

  const cartItemCount = () => {
    let total = 0;
    inventory.forEach(item => {
      total = total + item.numberInCart
    })
    return total
  }

  const qtyHandler = (id, value) => {
    const newInventory = inventory.map(item => item);
    newInventory.forEach(item => {
      if(id === item.id) {
        item.numberSelected = parseInt(value);
      }
    })
    setInventory(newInventory)
  }
  
  //item sorter for sidebar component (in /PageComponents)
  const sortItemsByPrice = (choice) => {
    let newInventoryArray 
    if (choice === 'high-to-low') {
      newInventoryArray = inventory.map(item => item);
      newInventoryArray.sort((a,b) => {
      return b.price - a.price;
      })
      setInventory(newInventoryArray)

    } if (choice === 'low-to-high') {
      const newInventoryArray = inventory.map(item => item);
      newInventoryArray.sort((a, b) => {
        return a.price - b.price
      })
      setInventory(newInventoryArray)
    } if (choice === 'alphabetical a-z') {
      const newInventoryArray = inventory.map(item=>item);
      newInventoryArray.sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
      setInventory(newInventoryArray)
    } if (choice==='alphabetical z-a') {
      const newInventoryArray = inventory.map(item=>item);
      newInventoryArray.sort((a,b) => {
        return b.name.localeCompare(a.name)
      })
      setInventory(newInventoryArray)
    }
    return
  }
  
  //setting total state, passed to Cart
  const [cartTotal, updateTotal] = useState(0)
  
  
  const addToCartHandler = (id) => {
    const newInventory = inventory.map(item=>item);
    
    newInventory.forEach(item => {
      if (item.id === id){
        const newTotal = cartTotal + item.price * item.numberSelected
        updateTotal(newTotal)
        item.numberInCart = item.numberInCart+item.numberSelected
      }
      setInventory(newInventory)
    })
  }

  const addOneMoreItem = (id) => {
    const newInventory = inventory.map(item => item)
    newInventory.forEach(item => {
      if (item.id === id) {
        const newTotal = cartTotal + item.price;
        updateTotal(newTotal);
        item.numberInCart = item.numberInCart + 1
      }
    })
  }

  //deletes item from cart (passed to Cart)
  const removeFromCartHandler = (id) => {
    const newInventory = inventory.map(item => item)
    newInventory.forEach(item => {
      if (item.id === id) {
        item.numberInCart = item.numberInCart - 1
        const newTotal = cartTotal - item.price
        updateTotal(newTotal)
      }
    })
  }

  const removeAllOfSameItem = (id) => {
    const newInventory = inventory.map(item => item);
    newInventory.forEach(item => {
      if (item.id === id) {
        const newTotal = cartTotal - item.numberInCart * item.price
        item.numberInCart = 0
        updateTotal(newTotal)
      }
    })
    setInventory(newInventory)
  }

  const emptyCart = () => {
    const newInv = inventory.map(item=> item);
    setInventory(cleanInventory);
    updateTotal(0) 
  }
  
  return (
  //routing
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage cartItemCount = {cartItemCount}/>} />
      <Route path='shop' element={
      <Shop 
        cartItemCount={cartItemCount} 
        addOne={addOneMoreItem} 
        removeAllOfSame={removeAllOfSameItem} 
        total={cartTotal} inventory={inventory} 
        qtyHandler={qtyHandler} 
        removeFromCart={removeFromCartHandler} 
        addToCart={addToCartHandler} 
        clickHandler = {addToCartHandler} 
        sort = {sortItemsByPrice}
        emptyCart={emptyCart}/>} />
      <Route path='cart' 
      element={
        <Cart emptyCart={emptyCart} 
        cartItemCount={cartItemCount} 
        addOne={addOneMoreItem} 
        removeAllOfSame={removeAllOfSameItem} 
        total={cartTotal} 
        inventory={inventory} 
        removeFromCart={removeFromCartHandler} 
        addToCart={addToCartHandler}/>} />
      <Route path='checkout'
      element={
      <CheckoutPage cartItemCount={cartItemCount} 
        addOne={addOneMoreItem} 
        removeAllOfSame={removeAllOfSameItem} 
        total={cartTotal} inventory={inventory} 
        qtyHandler={qtyHandler} 
        removeFromCart={removeFromCartHandler} 
        addToCart={addToCartHandler} 
        clickHandler = {addToCartHandler} 
        sort = {sortItemsByPrice}
        emptyCart={emptyCart}/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default Root