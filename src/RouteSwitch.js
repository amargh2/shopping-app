import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ProductDisplay from './components/ProductDisplay';
import SideBar from './components/SideBar';
import HomePage from './components/HomePage';
import Cart from './components/Cart'
import Shop from './components/Shop'

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='shop' element={<Shop/>} />
        <Route path='cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch