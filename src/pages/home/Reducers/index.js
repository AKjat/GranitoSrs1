import { homeSliderSlice } from "./HomeSliderReducer";
import { videoURLSlice } from "./VideoURLReducer";

export const homeSliderReducers = {
  homeSlider: homeSliderSlice.reducer,
  videoURL: videoURLSlice.reducer,
};
 