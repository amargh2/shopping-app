import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ProductDisplay from './components/ProductDisplay';
import SideBar from './components/SideBar';
function App() {
  return (
    <div className= 'grid-rows-10 grid-cols-10 grid gap-2'> 
      <div className="row-start-1 row-span-1 col-span-full"><Header/></div>
      <div className='row-start-2 row-span-1 col-span-full'><NavBar/></div>
      <div className='row-start-3 row-end-7 col-span-1 border-4 border-cyan-300 shadow-lg rounded-md flex justify-center'><SideBar/></div>
      <div className='row-start-4 col-start-2 col-span-10'><ProductDisplay/></div>
    </div>

  );
}

export default App;
