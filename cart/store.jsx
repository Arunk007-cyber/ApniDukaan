import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import LikedReducer from "./LikedSlice";
import FilterReducer from "./FilteredItemSlice"

const store=configureStore({
    reducer:{
        cart:cartReducer,
        liked:LikedReducer,
        filter:FilterReducer,
    }

})


export default store;