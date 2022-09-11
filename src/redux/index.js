import {configureStore} from "@reduxjs/toolkit";
import transportSlice from "./reducers/transportSlice";
import { reducers } from "./reducers";



export const transportActions = transportSlice.actions



const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      })
})
export default store;