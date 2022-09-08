import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { refreshingActions } from "../../../redux/reducers/refreshingSlice";

export const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProduct(state, { payload, type }) {
      state = payload;
      return state;
    },
    addCustomerVisitList(state, { payload, type }) {
      state = [...state, ...payload];
      return state;
    },
  },
});

export const productLinksSlice = createSlice({
  name: "productLinks",
  initialState: { next: null },
  reducers: {
    setProductLinks(state, { payload, type }) {
      state = payload;
      return state;
    },
  },
});

export const productLinksActions = productLinksSlice.actions;
export const productActions = productSlice.actions;

export const getproduct = (next) => {
  return function (dispatch, getState) {
    const { productLinks } = getState();
    let link;
    if (next) {
      if (productLinks.next) {
        link = productLinks.next;
      } else {
        dispatch(refreshingActions.setRefreshing(false));
        return;
      }
    } else {
      link = `${axios.defaults.baseURL}granito_products/`;
    }
    axios
      .get(link)
      .then((res) => {
        if (next) {
          dispatch(productActions.addCustomerVisitList(res.data.results));
        } else {
          dispatch(productActions.setProduct(res.data.results));
        }
        dispatch(
          productLinksActions.setProductLinks({
            next: res.data.next,
            count: res.data.count,
          })
        );
        dispatch(refreshingActions.setRefreshing(false));
      })
      .catch((e) => {
        console.log(e);
      });
  };
};
