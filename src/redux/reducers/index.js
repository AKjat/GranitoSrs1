import { combineReducers } from "redux";
import { refreshingSlice } from "./refreshingSlice";
import transportSlice from "./transportSlice";
import cartSlice from "../../pages/cart/Reducers/cartSlice";
import { productReducers } from "../../pages/products/Reducers";

export const reducers = combineReducers({
    refreshing:refreshingSlice.reducer,
    ...productReducers,

    cart: cartSlice.reducer,
    transportEstimate: transportSlice.reducer,
    

})