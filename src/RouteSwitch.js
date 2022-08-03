import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ProductDisplay from './components/ProductDisplay';
import SideBar from './components/SideBar';
import HomePage from './components/HomePage';
const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/shop' element={<App/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch