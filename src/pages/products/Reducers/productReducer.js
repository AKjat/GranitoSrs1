
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProduct(state, { payload, type }) {
      state = payload;
      return state;
    },
  },
});
export const productActions = productSlice.actions;

export const getproduct = (setRefreshing) => {
  return function (dispatch) {
    axios
      .get(`${axios.defaults.baseURL}granito_products/`)
      .then((res) => {
        dispatch(productActions.setProduct(res.data.results,res.data.count));
        if (setRefreshing) {
          setRefreshing(false);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
};


