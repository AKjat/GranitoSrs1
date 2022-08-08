import { productLinksSlice, productSearchSlice, productSlice } from "./productReducer";


export const productReducers = {
    product: productSlice.reducer,
    productSearch: productSearchSlice.reducer,
    productLinks: productLinksSlice.reducer,
}