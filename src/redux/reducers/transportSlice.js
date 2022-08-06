import { createSlice } from "@reduxjs/toolkit";


const transportSlice = createSlice({
    name: "transport",
    initialState : {cost: 0, showCost: false},
    reducers: {
        calculate(state, action){
            state.cost = action.payload
        }, 
        showCost(state, action){
            state.showCost = action.payload
        } 
    }
})
export default transportSlice;