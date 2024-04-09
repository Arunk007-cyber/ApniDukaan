import { createSlice } from "@reduxjs/toolkit"


const likedSlice=createSlice({
    name:'liked',
    initialState:[],
    reducers:{
        adding(state,action){
            state.push(action.payload);
        },
        removing(state,action){
            return state.filter((item)=>item.id!==action.payload)
        }
        
    }
})

export const {adding,removing} = likedSlice.actions
export default likedSlice.reducer;


