import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const WebsiteSlice = createSlice({
  name: "website_data",
  initialState: [],
  reducers: {
    setWebsiteData(state, { payload, type }) {
      state = payload;
      return state;
    },

    addWebsiteData(state, { payload, type }) {
      state = [payload, ...state];
      return state;
    },
  },
});

export const WebsiteFormSlice = createSlice({
  name: "website_form",
  initialState: {
    whatsapp_number: null,
    product: null,
    block: null,
    link: null,
    token: "PlAax0gKxE05qaSPYSN9ksLv8q4lPszu",
  },
  reducers: {
    setWebsite(state, { payload, type }) {
      console.log(state, "stae");
      state = { ...state, [payload.name]: payload.value };
      return state;
    },
    setWebsiteForm(state, { payload, type }) {
      state = payload;
      return state;
    },
    clearForm(state, { payload, type }) {
      state = {
        whatsapp_number: null,
        product: null,
        block: null,
        link: null,
      };
      return state;
    },
    
  },
});

export const WebsiteErrorSlice = createSlice({
  name: "website_error",
  initialState: null,
  reducers: {
    setWebsiteError(state, { payload, type }) {
      state = { ...state, ...payload };
      return state;
    },
    clearWebsite(state, { payload, type }) {
      state = null;
      return state;
    },
  },
});

export const WebsiteFormActions = WebsiteFormSlice.actions;
export const WebsiteActions = WebsiteSlice.actions;
export const WebsiteErrorActions = WebsiteErrorSlice.actions;
