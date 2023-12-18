import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import {add, remove} from "../redux/SLice/CartSlice"

const Product = ({post}) => {
    const cart= useSelector((state)=>state.cart); 
    const dispatch =useDispatch();
    const addToCart=()=>{
        dispatch(add(post));
        toast.success("Item added");
        
    }
    

    const removeFromCart=()=>{
        dispatch(remove(post.id));
        toast.error("Item removed")
    }
  return (
    <div className='flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in shadow-lg rounded-xl gap-4 p-4 mt-10 ml-5 '>
        <div>
            <p className='text-gray-700 font-bold text-lg text-left truncate w-40 mt-1'>{post.title}</p>
        </div>
        <div>
            <p className='w-40 text-gray-500 text-[10px] text-left'>{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
        </div>
        <div className='h-[180px]'>
            <img src={post.image} className='h-full w-full'/>
        </div>



        <div className='flex justify-between gap-12 items-center w-full mt-5'>
            <div><p className='text-green-600 font-bold '>${post.price}</p>
                </div>
              {/* <button>
            {
                selected ? <p>Remove Item</p>: <p>Add to Cart</p>
            }
        </button> */}

        {/* if cart has item==> remove button
            if cart do not have item==> Add button
        */}

            {
            cart.some((p)=>p.id ==post.id) ? 
            (<button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:text-slate-100 hover:bg-gray-700  transition duration-300'
            onClick={removeFromCart}>Remove Item</button>):
            (<button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase  hover:text-slate-100 hover:bg-gray-700 transition duration-300'  onClick={addToCart}>Add to Cart</button>)
        }
        </div>
      
      

      
    </div>
  )
}

export default Product
