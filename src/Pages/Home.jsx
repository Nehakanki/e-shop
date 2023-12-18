import React, { useEffect } from 'react'
import Spinner from '../Components/Spinner';
import Product from '../Components/Product';
import { useState } from 'react';

const Home = () => {

    const API_URL ="https://fakestoreapi.com/products";
    const[loading,setLoading] = useState(false);
    const[posts,setPosts]=useState([]);
  


    async function fetchProductData(){
        setLoading(true);
        try{
            const res = await fetch(API_URL);
            const data= await res.json(); ///imp step
            console.log(data);
           setPosts(data);
        }

        catch(error){
            console.log(error)
            setPosts([]);
        }
        setLoading(false);
    }

    useEffect(()=>{
        fetchProductData();
    },[]); //calling the fetch fun

  return (
    <div className='mt-16'>
    {/* Product = card hai  */}
    {
        loading ? <Spinner/>: posts.length >0 ?(<div className='grid  xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 max-w-6xl mx-auto space-y-10 space-x-5 min-h-[80vh]'>
             {
                posts.map((post)=>(
                    <Product  key={post.id} post={post}/>
                ))
             }  
        </div>) : 
        
            <div className='flex justify-center items-center'>
                <p>No Data Found</p>
            </div>
        

    }
        
    </div>
  );
}

export default Home
