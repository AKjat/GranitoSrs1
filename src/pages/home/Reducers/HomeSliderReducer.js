import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const homeSliderSlice = createSlice({
  name: "home_slider",
  initialState: [],
  reducers: {
    setHomeSlider(state, { payload, type }) {
      state = payload;
      return state;
    },
  },
});
export const homeSliderActions = homeSliderSlice.actions;

export const getHomeSlider = (setRefreshing) => {
  return function (dispatch) {
    axios
      .get(`${axios.defaults.baseURL}home_slider/`)
      .then((res) => {
        dispatch(homeSliderActions.setHomeSlider(res.data.results));
        if (setRefreshing) {
          setRefreshing(false);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
};
