import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const productCountSlice = createSlice({
  name: "products_count",
  initialState: {},
  reducers: {
    setProductCount(state, { payload, type }) {
      state = payload;
      console.log(payload,'hhhhhhh')
      return state;
    },
    clearProductCount(state, { payload, type }) {
      state = {};
      return state;
    },
  },
});
export const productCountActions = productCountSlice.actions;

export const getProductCount = (id) => {
  return function (dispatch) {
    // console.log("idddd");
    axios
      .get(`${axios.defaults.baseURL}granitodetailfilter/`)

      .then((res) => {
        dispatch(productCountActions.setProductCount(res.data));
      })
      .catch((e) => {
        console.log(e);
      });
  };
};
