import { createSlice } from "@reduxjs/toolkit"

const filterSlice=createSlice({
    name:'filtered',
    initialState:[],
    reducers:{
        adder(state,action){
            return action.payload;
        },
       
    }
})

export const {adder} = filterSlice.actions
export default filterSlice.reducer;
