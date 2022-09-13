import { combineReducers } from "redux";
import { refreshingSlice } from "./refreshingSlice";
import transportSlice from "./transportSlice";
import { productReducers } from "../../pages/products/Reducers";
import { saveSlice } from "./SaveReducer";
import {
  WebsiteErrorSlice,
  WebsiteFormSlice,
  WebsiteSlice,
} from "./WebsiteDataReducer";

export const reducers = combineReducers({
  refreshing: refreshingSlice.reducer,
  ...productReducers,
  transportEstimate: transportSlice.reducer,
  saving: saveSlice.reducer,

  //   website reducer
  website: WebsiteSlice.reducer,
  websiteForm: WebsiteFormSlice.reducer,
  websiteError: WebsiteErrorSlice.reducer,
});
