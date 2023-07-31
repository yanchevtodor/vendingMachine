import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk('getProducts', async () => {
    const responce = await axios.get("http://localhost:5000/products")
    return responce.data;
})


const initialState = {
    products: [],
    tray: {}
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        updateProductCountDown: (state, action) => {
            const payloadProduct = action.payload;
            const existingProduct = state.products.find(
                (product) => product.name === payloadProduct.name
            );

            if (existingProduct.count > 0) { 
                existingProduct.count -= 1;
            }
        },
        updateProductCountUp: (state, action) => {
            const payloadProduct = action.payload;
            const existingProduct = state.products.find(
                (product) => product.name === payloadProduct.name
            );

            existingProduct.count += 1;
        },
        setTray: (state, action) => {
            state.tray = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload
        })
    }

})

export const {  setTray, updateProductCountDown, updateProductCountUp } = productsSlice.actions;

export default productsSlice.reducer;