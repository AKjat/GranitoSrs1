import {configureStore, createSlice, getDefaultMiddleware} from "@reduxjs/toolkit";
import cartSlice from "../pages/cart/Reducers/cartSlice";
import customerSlice from "./reducers/customerSlice";
import loginSlice from "../pages/login/Reducers/loginSlice";
import searchSlice from "../pages/products/Reducers/searchSlice";
import signupSlice from "../pages/signup/Reducers/signupslice";
import transportSlice from "./reducers/transportSlice";
import uploadSlice from "../pages/addNewProduct/Reducer/uploadSlice";
import imgUploadSlice from "../pages/addNewProduct/Reducer/imageUpload";
import filterSlice from "../pages/products/Reducers/filterSlice";

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