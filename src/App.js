import React, {useState, useEffect} from 'react'
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ProductDisplay from './components/ProductDisplay';
import SideBar from './components/SideBar';

function App() {
  const [inventory, setInventory] = useState([
    {name: 'Amethyst',
     price: 50
    },
    
    {name: "Tiger's Eye",
     price: 25
    },
    
    {name: 'Tourmeline',
     price: 40},
    
     {name: 'Jade',
     price: 30 },
    
     {name: 'Onyx',
      price: 25},
    
     {name: 'Garnet',
      price: 25},

      {name: "Je ne ce'st pas",
      price: 10},

      {name: 'Garnet',
      price: 25},

      {name: 'Rose Quartz',
      price: 15}
  ])
  
  return (
    <div className= 'lg:grid-rows-10 lg:grid lg:grid-cols-10 gap-2 sm:flex flex-col md:grid md:grid-cols-3'> 
      <div className="row-start-1 row-span-1 col-span-full"><Header/></div>
      <div className='row-start-2 row-span-1 col-span-full'><NavBar/></div>
      <div className='row-start-3 row-end-7 col-span-1 border-4 border-cyan-300 shadow-lg rounded-md flex justify-center'><SideBar/></div>
      <div className='row-start-3 col-start-2 lg:col-span-7 lg:row-span-7 md:col-span-2'><ProductDisplay products={inventory} updateInventory ={setInventory} /></div>
    </div>

  );
}

export default App;
