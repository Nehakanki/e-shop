import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Cartitem from '../Components/Cartitem';

const Cart = () => {
  const cart = useSelector((state) => state.cart); //cart data

  const [totalAmount, setTotalAmount] = useState(() => cart.reduce((acc, curr) => acc + curr.price, 0));

  // Calculate total amount whenever cart changes
  useEffect(() => {
    const newTotalAmount = cart.reduce((acc, curr) => acc + curr.price, 0);
    setTotalAmount(newTotalAmount);
  }, [cart]);

  return (
    <div className='flex flex-col justify-center items-center mt-16'>
      {cart.length > 0 ? (
        <div className='w-full max-w-screen-lg flex flex-col md:flex-row'>
          {/* Cart items */}
          <div className='flex flex-col'>
            {cart.map((item, index) => (
              <Cartitem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          {/* Cart summary */}
          <div className='flex flex-col justify-between items-center ml-6 md:ml-11 mt-8 md:mt-0'>
            <div className='flex flex-col mt-10'>
              <div className='text-lg font-bold uppercase'>Your Cart</div>
              <div className='text-xl font-bold text-green-500 uppercase'>Summary</div>
              <p>
                <span className='text-gray-700 font-semibold'>Total Items: {cart.length}</span>
              </p>
            </div>
            <div className='mt-6 md:mt-8'>
              <p className='text-lg'>Total Amount: <span className='font-bold'>${totalAmount.toFixed(2)}</span></p>
              <button className='bg-green-600 text-white font-semibold uppercase rounded-xl py-3 px-10 mt-4 text-lg'>Checkout</button>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex flex-col justify-center items-center h-screen'>
          <h2 className='text-red-700 uppercase font-semibold text-lg'>Cart Empty</h2>
          <NavLink to={'/'}>
            <button className='bg-green-600 text-white font-semibold uppercase rounded-xl py-3 px-10 mt-6 text-lg'>Shop Now</button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
