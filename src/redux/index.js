import {configureStore, createSlice, getDefaultMiddleware} from "@reduxjs/toolkit";
import cartSlice from "./reducers/cartSlice";
import customerSlice from "./reducers/customerSlice";
import filterSlice from "./reducers/filterSlice";
import imgUploadSlice from "./reducers/imageUpload";
import loginSlice from "./reducers/loginSlice";
import searchSlice from "./reducers/searchSlice";
import signupSlice from "./reducers/signupslice";
import transportSlice from "./reducers/transportSlice";
import uploadSlice from "./reducers/uploadSlice";

const counterSlice = createSlice({
    name: "counter",
    initialState : {count: 0},
    reducers: {
        increment(state, action){
            state.count++;
        },
        deccrement(state, action){
            state.count--
        },
        Addby(state, action){
            state.count+=action.payload
        },
    }
})

export const actions = counterSlice.actions
export const cartActions = cartSlice.actions
export const customerActions = customerSlice.actions
export const loginActions = loginSlice.actions
export const transportActions = transportSlice.actions
export const uploadProductActions = uploadSlice.actions

const store = configureStore({
    reducer: {count: counterSlice.reducer,
         cart: cartSlice.reducer,
         customer: customerSlice.reducer,
         login: loginSlice.reducer,
         signup: signupSlice.reducer,
         transportEstimate: transportSlice.reducer,
         uploadProduct: uploadSlice.reducer,
         imgUpload: imgUploadSlice.reducer,
         filter: filterSlice.reducer,
         search: searchSlice.reducer
        },
    
    // middleware: getDefaultMiddleware({
    //         serializableCheck: false
    //       }),
})
export default store;