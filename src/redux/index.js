import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "../pages/cart/Reducers/cartSlice";
import transportSlice from "./reducers/transportSlice";
import { reducers } from "./reducers";



export const cartActions = cartSlice.actions
export const transportActions = transportSlice.actions



const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      })
})
export default store;