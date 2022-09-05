import { productBlockSlice } from "./productBlockReducer";
import { productLinksSlice, productSlice } from "./ProductReducer";
import { productSearchSlice } from "./productAkshitReducer";
import { productBlockDetailSlice } from "./productBlockDetailReducer";
import { productCountSlice } from "./ProductCount";


export const productReducers = {
    // product: productSlice.reducer,
    productSearch: productSearchSlice.reducer,
    // productLinks: productLinksSlice.reducer,



    products:productSlice.reducer,
    productBlock:productBlockSlice.reducer,
    productBlockDetail:productBlockDetailSlice.reducer,
    productLinks: productLinksSlice.reducer,
    productCount:productCountSlice.reducer,

}