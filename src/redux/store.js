import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./slices/wishlistSlice";
import cartSlice from "./slices/cartSlice";
import allProductsSlice from "./slices/allProductsSlice";

const store = configureStore({
    reducer:{
        wishListReducer:wishlistSlice,
        cartReducer:cartSlice,
        allProductsSlice
    }
})

export default store;