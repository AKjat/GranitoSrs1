import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { refreshingActions } from "../../../redux/reducers/refreshingSlice";

export const productBlockDetailSlice = createSlice({
  name: "products_block_detail",
  initialState: [],
  reducers: {
    setProductBlockDetail(state, { payload, type }) {
      state = payload;
      return state;
    },
    clearProductBlockDetail(state, { payload, type }) {
      state = [];
      return state;
    },
  },
});
export const productBlockDetailActions = productBlockDetailSlice.actions;

export const getProductBlockDetail = (id) => {
  return function (dispatch) {
    axios
      .get(`${axios.defaults.baseURL}granito_block/${id}`)

      .then((res) => {
        dispatch(productBlockDetailActions.setProductBlockDetail(res.data));
        dispatch(refreshingActions.setRefreshing(false));
      })
      .catch((e) => {
        console.log(e);
      });
  };
};
