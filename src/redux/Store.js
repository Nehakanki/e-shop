import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./SLice/CartSlice";



export const store = configureStore({
    reducer:{
        //slices listing in key: value
        //key: slice name
        //value: Slice
        cart:CartSlice, //make sure you have exported the reducers and use CartSLice not {CartSlice}
       
    }
});