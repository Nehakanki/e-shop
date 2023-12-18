import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Cartitem from '../Components/Cartitem';

const Cart = () => {
  const cart  = useSelector((state) => state.cart); //cart data
  

  const [totalAmount, setTotalAmount] = useState(() => cart.reduce((acc, curr) => acc + curr.price, 0));

  // Important Part
  useEffect(() => {
    // to calculate the sum of array items in the cart
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
   <div className='flex flex-row mt-16 justify-center items-center'>
     <div >
      {cart.length > 0 ? (
        <div className='flex'>
          {/* show cart item */}
          {/* //max-w-md */}
          <div className='flex flex-col  ' >
            {cart.map((item, index) => {
              return <Cartitem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className='flex flex-col justify-between items-center ml-11'>
            <div className='flex flex-col mt-10  '>
                <div className='text-[20px] font-bold uppercase '>Your Cart</div>
                <div className='text-[35px] font-bold text-green-500 uppercase'>Summary</div>
                <p>
                  <span className='text-gray-700 font-semibold text-[20px] pt-5'>Total Items: {cart.length}</span>
                </p>
              </div>

              <div>
                <p className='text-[20px]'>Total Amount: <span className='font-bold '>${totalAmount.toFixed(2)}</span></p>
                <button className='bg-green-600 text-slate-100 font-semibold uppercase rounded-xl py-3 px-10  m-8 text-[20px]'>CheckOut</button>
              </div>

             </div>  
        </div>
      ) : (
        <div className='flex flex-col justify-center items-center  h-screen'>
          <h2 className='text-red-700 uppercase font-semibold text-[20px]'> Cart Empty</h2>
          <NavLink to={'/'}>
            <button className='bg-green-600 text-slate-100 font-semibold uppercase rounded-xl py-3 px-10  m-8 text-[20px]'>Shop Now</button>
          </NavLink>
        </div>
      )}
    </div>
   </div>
  );
};

export default Cart;
