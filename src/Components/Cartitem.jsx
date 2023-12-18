import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import {remove} from "../redux/SLice/CartSlice"

import { toast } from 'react-toastify';


const Cartitem = ({item}) => {
  const dispatch =useDispatch();
  const removeFromCart=()=>{
    dispatch(remove(item.id));
    toast.warning("Item removed")
  }
  return (
    
      <div className='flex gap-4 border-b-4 border-gray-700 justify-center items-center  '>
        <div>
            <img src={item.image} className='h-[180px] w-[180px] mr-5'/>
        </div>
        <div className='h-[250px] w-[360px] pt-8 '>
            <h1 className='text-gray-700 font-bold text-lg text-left  w-60 mt-1 mb-2'>{item.title}</h1>
            <h1 className='w-40 text-gray-500 text-[12px] text-left '>{item.description.split(" ").slice(0,10).join(" ")}</h1>
            <div className='flex justify-between items-center mt-3'>
                <p className='font-bold text-gray-700'>${item.price}</p>
                {/* on click remove item */}
                <div  onClick={removeFromCart}>
                <MdDelete style={{ color: 'red', borderRadius: '50%', background: 'lightgray', padding: '5px', fontSize: '1.9em' }} />
                </div>
            </div>
            
        </div>

      </div>
    
  )
}

export default Cartitem
