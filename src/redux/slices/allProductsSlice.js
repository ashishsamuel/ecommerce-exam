import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// api call - createAsyncThunk
export const fetchProducts = createAsyncThunk('productList/fetchProducts',()=>{
// api call
    return axios.get('https://dummyjson.com/products').then(response=>response.data.products)
})

const allProductsSlice = createSlice({
    name:'productList',
    initialState:{
        loading:false,
        allProducts:[],
        allProductsContainer:[],
        error:''
    },
    reducers:{
        searchProduct:(state,action)=>{
            state.allProducts = state.allProductsContainer.filter(item=>item.title.toLowerCase().includes(action.payload))
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.loading = false
            state.allProducts = action.payload
            state.allProductsContainer = action.payload
            state.error = ''
        })
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.loading = false
            state.allProducts = []
            state.error = action.error.message
        })
    }
})

export const {searchProduct} = allProductsSlice.actions
export default allProductsSlice.reducer