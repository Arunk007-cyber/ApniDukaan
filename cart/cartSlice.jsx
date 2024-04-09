import { createSlice } from "@reduxjs/toolkit"


const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        add(state,action){
            state.push(action.payload);
        },
        remove(state,action){
            return state.filter((item)=>item.id!==action.payload)
        },
        clearcart(){
           return []
        }
    }
})

export const {add, remove,clearcart} = cartSlice.actions
export default cartSlice.reducer;


