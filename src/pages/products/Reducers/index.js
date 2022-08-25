import { productBlockSlice } from "./productBlockReducer";
import { productSlice } from "./ProductReducer";
import { productLinksSlice, productSearchSlice } from "./productAkshitReducer";
import { productBlockDetailSlice } from "./productBlockDetailReducer";


export const productReducers = {
    // product: productSlice.reducer,
    productSearch: productSearchSlice.reducer,
    productLinks: productLinksSlice.reducer,



    products:productSlice.reducer,
    productBlock:productBlockSlice.reducer,
    productBlockDetail:productBlockDetailSlice.reducer,

}