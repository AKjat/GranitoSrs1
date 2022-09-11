import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "../pages/cart/Reducers/cartSlice";
import customerSlice from "./reducers/customerSlice";
import transportSlice from "./reducers/transportSlice";
import { reducers } from "./reducers";



export const cartActions = cartSlice.actions
export const customerActions = customerSlice.actions
export const transportActions = transportSlice.actions



const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      })

    
    // middleware: getDefaultMiddleware({
    //         serializableCheck: false
    //       }),
})
export default store;