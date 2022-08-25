import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const productBlockSlice = createSlice({
  name: "products_block",
  initialState: [],
  reducers: {
    setProductBlock(state, { payload, type }) {
      state = payload;
      return state;
    },
  },
});
export const productBlockActions = productBlockSlice.actions;

export const getProductBlock = (id) => {
  return function (dispatch) {
    console.log("idddd");
    axios
      .get(`${axios.defaults.baseURL}granito_products/${id}`)

      .then((res) => {
        dispatch(productBlockActions.setProductBlock(res.data));
      })
      .catch((e) => {
        console.log(e);
      });
  };
};
