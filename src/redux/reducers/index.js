import { combineReducers } from "redux";
import { refreshingSlice } from "./refreshingSlice";
import transportSlice from "./transportSlice";
import loginSlice from "../../pages/login/Reducers/loginSlice";
import cartSlice from "../../pages/cart/Reducers/cartSlice";
import customerSlice from "./customerSlice";
import { productReducers } from "../../pages/products/Reducers";

export const reducers = combineReducers({
    refreshing:refreshingSlice.reducer,
    ...productReducers,

    cart: cartSlice.reducer,
    customer: customerSlice.reducer,
    login: loginSlice.reducer,
    transportEstimate: transportSlice.reducer,
    

})