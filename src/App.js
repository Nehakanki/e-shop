import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar"
import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Home'
import Cart from './Pages/Cart'

function App() {
  return (
    <div >
     <div className='bg-slate-900   fixed top-0 w-full z-10 '><Navbar/></div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>


    </div>

    
  );
}

export default App;
