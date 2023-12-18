import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import image from "./E-shop-.png"
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'; 
{/*  */}

const Navbar = () => {

  const {cart} = useSelector((state)=> state);//cart data
  console.log(cart);
  return (
    <nav className='flex flex-row  justify-between items-center h-20 max-w-6xl mx-auto'>
     <NavLink to="/">
        <div className='ml-5 '>
        <img src={image} className='minwidth h-14'/>
        </div>
     </NavLink>
        <div className='flex  items-center font-medium text-slate-100 mr-5 space-x-6'>
            <NavLink to="/">  
            <p>Home</p>
            </NavLink>
            <NavLink to ="/cart">
                <div className='relative '>
                <FaShoppingCart style={{ color: 'white' }}  className='text-2xl' />
                  {
                    cart.length>0 && 
                    <span className='absolute -top-3 -right-2 bg-green-600 text-xs w-5 h-5  flex justify-center items-center animate-bounce rounded-full'>{cart.length}</span>
                  }
                  {/* just to pop up numbers */}
                
                </div>
            </NavLink>
       
        </div>
      
    </nav>
  )
}

export default Navbar
