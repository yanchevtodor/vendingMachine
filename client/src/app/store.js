import { configureStore } from "@reduxjs/toolkit"
import moneyReducer from '../features/money/moneySlice'
import productsReducer from '../features/products/productsSlice'

export const store = configureStore({
    reducer: {
        money: moneyReducer,
        products: productsReducer
    }
})