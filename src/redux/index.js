import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "../pages/cart/Reducers/cartSlice";
import customerSlice from "./reducers/customerSlice";
import loginSlice from "../pages/login/Reducers/loginSlice";
import transportSlice from "./reducers/transportSlice";
import uploadSlice from "../pages/addNewProduct/Reducer/uploadSlice";
import { reducers } from "./reducers";



// export const actions = counterSlice.actions
export const cartActions = cartSlice.actions
export const customerActions = customerSlice.actions
export const loginActions = loginSlice.actions
export const transportActions = transportSlice.actions
export const uploadProductActions = uploadSlice.actions



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