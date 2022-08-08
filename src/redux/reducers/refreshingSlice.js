import { createSlice, } from "@reduxjs/toolkit";

export const refreshingSlice = createSlice({
    name: "refreshing",
    initialState : true,
    reducers: {
        setRefreshing(state, {payload, type}){
            state = payload
            return state
        },
    }
})

export const refreshingActions = refreshingSlice.actions