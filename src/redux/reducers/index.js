import { combineReducers } from "redux";
import { refreshingSlice } from "./refreshingSlice";
import transportSlice from "./transportSlice";
import { productReducers } from "../../pages/products/Reducers";

export const reducers = combineReducers({
    refreshing:refreshingSlice.reducer,
    ...productReducers,

    transportEstimate: transportSlice.reducer,
    

})