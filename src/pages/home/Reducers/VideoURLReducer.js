import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const videoURLSlice = createSlice({
  name: "videoURL",
  initialState: [],
  reducers: {
    setVideoURL(state, { payload, type }) {
      state = payload;
      return state;
    },
  },
});
export const videoURLActions = videoURLSlice.actions;

export const getVideoURL = (setRefreshing) => {
  return function (dispatch) {
    axios
      .get(`${axios.defaults.baseURL}video_url/`)
      .then((res) => {
        dispatch(videoURLActions.setVideoURL(res.data.results));
        if (setRefreshing) {
          setRefreshing(false);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
};
