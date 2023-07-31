import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    money: 0,
    change: 0
}

export const moneySlice = createSlice({
    name: 'money',
    initialState,
    reducers: {
        setMoney: (state, action) => {
            state.money = action.payload
        },
        addMoney: (state, action) => {
            state.money += action.payload
        },
        resetMoney: (state) => {
            state.money = 0
        },
        setChange: (state, action) => {
            state.change = action.payload
        },
        addChenge: (state, action) => {
            state.change += action.payload
        },
        resetChenge: (state) => {
            state.change = 0
        },
    }
})

export const { addMoney, setMoney , resetMoney, setChange, addChenge, resetChenge } = moneySlice.actions;

export default moneySlice.reducer;