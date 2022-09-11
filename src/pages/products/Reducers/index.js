import { productBlockSlice } from "./productBlockReducer";
import { productLinksSlice, productSlice } from "./ProductReducer";
import { productBlockDetailSlice } from "./productBlockDetailReducer";
import { productCountSlice } from "./ProductCount";

export const productReducers = {
  products: productSlice.reducer,
  productBlock: productBlockSlice.reducer,
  productBlockDetail: productBlockDetailSlice.reducer,
  productLinks: productLinksSlice.reducer,
  productCount: productCountSlice.reducer,
};
