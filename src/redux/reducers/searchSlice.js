import { createSlice, } from "@reduxjs/toolkit";
import axios from "axios";

const searchSlice = createSlice({
    name: "search",
    initialState : {
        name: "",
        category: "",
        tag: "",
        origin: "",
        price_min: "",
        price_max: "",
        color: []
    },
    reducers: {
        setSearch(state, {payload, type}){
            if(payload.name === "color"){
                let color = state.color
                color = [...color, payload.value]
                state = {...state, [payload.name]: color}
            }
            else {
                state = {...state, [payload.name]: payload.value}
            }
            return state
        },
        remSearch(state, {payload, type}){
            if(payload.name === "color"){
                let color = state.color
                color= color.filter((d)=>d != payload.value)
                state = {...state, [payload.name]: color}
            }
            return state
        }
        
    }
})
export const searchActions = searchSlice.actions


export default searchSlice ;