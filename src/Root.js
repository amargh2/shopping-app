import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Header from './components/PageComponents/Header';
import NavBar from './components/PageComponents/NavBar';
import ProductDisplay from './components/ShopComponents/ProductDisplay';
import SideBar from './components/SideBar';
import HomePage from './components/PageComponents/HomePage';
import Cart from './components/CartComponents/Cart'
import Shop from './components/ShopComponents/Shop'
import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid'

const Root = () => {
  const [numberSelected, setNumberSelected] = useState(1)
  
  //defining inventory (could probably export this somewhere)
  const [inventory, setInventory] = useState([
    {name: 'Amethyst',
     price: 50,
     id: '1',
     imgSrc: `images/amethyst.jpg`,
     numberInCart:0,
     numberSelected:1
     //stock could go here
    },
    
    {name: "Tiger's Eye",
     price: 25,
     id: '2',
     imgSrc:`images/tigerseye.jpg`,
     numberInCart:0,
     numberSelected:1
    },
    
    {name: 'Tourmeline',
     price: 40,
     id: '3',
     imgSrc: `images/tourmaline.jpg`,
     numberInCart:0,
     numberSelected:1
    },
    
     {name: 'Jade',
     price: 30,
     id: '4',
     imgSrc:`images/jade.jpg`,
     numberInCart:0,
     numberSelected:1
    },
    
    {name: 'Onyx',
     price: 25,
     id: '5',
     imgSrc:`images/tigerseye.jpg`,
     numberInCart:0,
     numberSelected:1
    },
    
    {name: 'Garnet',
     price: 25,
     id: '6',
     imgSrc:`images/amethyst.jpg`,
     numberInCart:0,
     numberSelected:1
    },

      {name: "Je ne ce'st pas",
      price: 10,
      id: '7',
      imgSrc:`images/tigerseye.jpg`,
      numberInCart:0,
      numberSelected:1
      },

      {name: 'Garnet',
      price: 25,
      id: '8',
      imgSrc:`images/tigerseye.jpg`,
      numberInCart:0,
      numberSelected:1
      },

      {name: 'Rose Quartz',
      price: 15,
      id:'9',
      imgSrc:'images/tigerseye.jpg',
      numberInCart:0,
      numberSelected:1
    }
  ])

  const qtyHandler = (id, value) => {
    const newInventory = inventory.map(item => item);
    newInventory.forEach(item => {
      if(id === item.id) {
        item.numberSelected = parseInt(value);
      }
    })
    setInventory(newInventory)
    console.log('event occuurrreedd')
    console.log(newInventory)
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
    } if (choice === 'alphabetical') {
      const newInventoryArray = inventory.map(item=>item);
      newInventoryArray.sort((a, b) => {
        return a.name - b.name
      })
      console.log(newInventoryArray)
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
    console.log(`id = ${id}`)
    console.log('clicked')
    const newInventory = inventory.map(item => item)
    newInventory.forEach(item => {
      if (item.id === id) {
        console.log(item.name)
        item.numberInCart = item.numberInCart - 1
        const newTotal = cartTotal - item.price
        updateTotal(newTotal)
      }
    })
    console.log(newInventory)
    setInventory(newInventory)
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
  
  return (
  //routing
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='shop' element={<Shop addOne={addOneMoreItem} removeAllOfSame={removeAllOfSameItem} total={cartTotal} inventory={inventory} qtyHandler={qtyHandler} removeFromCart={removeFromCartHandler} addToCart={addToCartHandler} clickHandler = {addToCartHandler} sort = {sortItemsByPrice}/>} />
      <Route path='cart' element={<Cart addOne={addOneMoreItem} removeAllOfSame={removeAllOfSameItem} total={cartTotal} inventory={inventory} removeFromCart={removeFromCartHandler} addToCart={addToCartHandler}/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default Root