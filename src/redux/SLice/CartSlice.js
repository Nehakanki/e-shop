import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({

    name:"cart",
    initialState:[],
    reducers:{
        add:(state, action)=>{
            state.push(action.payload); //action.payload= input
        },
        remove:(state,action)=>{
            return state.filter((item)=>item.id != action.payload); //return state whose id != input id
            //input => 1,2,3 ids (if input id= 3) return =>1,3 only
        },
    }
});

export const {add, remove} =CartSlice.actions;
export default CartSlice.reducer;