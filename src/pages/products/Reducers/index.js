import { productSlice } from "./ProductR";
import { productLinksSlice, productSearchSlice } from "./productReducer";


export const productReducers = {
    // product: productSlice.reducer,
    productSearch: productSearchSlice.reducer,
    productLinks: productLinksSlice.reducer,



    products:productSlice.reducer,
}