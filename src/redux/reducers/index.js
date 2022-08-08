import { combineReducers } from "redux";
import { refreshingSlice } from "./refreshingSlice";
import imgUploadSlice from "../../pages/addNewProduct/Reducer/imageUpload";
import transportSlice from "./transportSlice";
import loginSlice from "../../pages/login/Reducers/loginSlice";
import cartSlice from "../../pages/cart/Reducers/cartSlice";
import customerSlice from "./customerSlice";
import uploadSlice from "../../pages/addNewProduct/Reducer/uploadSlice";
import signupSlice from "../../pages/signup/Reducers/signupslice";
import { productReducers } from "../../pages/products/Reducers";

export const reducers = combineReducers({
    refreshing:refreshingSlice.reducer,
    ...productReducers,

    cart: cartSlice.reducer,
    customer: customerSlice.reducer,
    login: loginSlice.reducer,
    signup: signupSlice.reducer,
    transportEstimate: transportSlice.reducer,
    uploadProduct: uploadSlice.reducer,
    imgUpload: imgUploadSlice.reducer

    // ...productReducers,

})