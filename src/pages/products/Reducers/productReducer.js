import { createSlice, } from "@reduxjs/toolkit";
import axios from "axios";
import { refreshingActions } from "../../../redux/reducers/refreshingSlice";

export const productSlice = createSlice({
    name: "product",
    initialState : [],
    reducers: {
        setProduct(state, { payload, type }) {
            state = payload;
            return state;
          },
          addProduct(state, { payload, type }) {
            state = [payload, ...state];
            return state;
          },
          addProductList(state, { payload, type }) {
            state = [...state, ...payload];
            return state;
          },
          updateProduct(state, { payload, type }) {
            let index = state.findIndex((item) => item.id == payload.id);
            if (index != -1) {
              state[index].party = payload?.party;
              state[index].slab_count = payload?.slab_count;
            }
      
            return state;
          },
          deleteProduct(state, { payload, type }) {
            state = state.filter((d) => d.id !== payload);
            return state;
          },
    

        
    }
})

export const productLinksSlice = createSlice({
    name: "productLinks",
    initialState: { next: null, prev: null },
    reducers: {
      setProductLinks(state, { payload, type }) {
          state = payload;
        return state;
      },
    },
  });
export const productSearchSlice = createSlice({
    name: "productsearch",
    initialState: {},
    reducers: {
      setSearch(state, { payload, type }) {
        state = { ...state, [payload.name]: payload.value };
        return state;
      },
      clearSearch(state, { payload, type }) {
        state = {};
        return state;
      },
      removeSearch(state, { payload, type }) {
        delete state[payload.name];
        return state;
      },
    },
});

export const productActions = productSlice.actions
export const productLinkActions = productLinksSlice.actions
export const productSearchActions = productSearchSlice.actions



export const getProducts= ( next, prev) => {
    return function (dispatch, getState) {
        
        const {productSearch, productLinks} = getState()
        let link
        if (next) {
          console.log(productLinks,"links")
          if (productLinks.next) {
            link = productLinks.next;
          } else {
            dispatch(refreshingActions.setRefreshing(false))
            return;
          }
        }
        else if(prev){
          if(productLinks.prev){
            link = productLinks.prev
          }
          else {
            dispatch(refreshingActions.setRefreshing(false))
            return;
          }
        }
        else{
          link = `${axios.defaults.baseURL}granito_product/`
        }
        let url = new URL(link)
        if (!next && !prev ) {
          if (productSearch != null && productSearch != {}) {
          url.search = new URLSearchParams(productSearch);
          }
        }
        axios
        .get(url)
        .then((res)=>{
            dispatch(productActions.setProduct(res.data.results))
            dispatch(productLinkActions.setProductLinks({next: res.data.next, prev: res.data.previous, count:res.data.count}))
            dispatch(refreshingActions.setRefreshing(false))
        })
        .catch((error)=>{
            console.log("Error", error)
        })
    }
}



