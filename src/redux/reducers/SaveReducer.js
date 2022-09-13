import { createSlice } from "@reduxjs/toolkit";


export const saveSlice = createSlice({
    name: "saving",
    initialState: false,
    reducers: {
      setSaving(state, { payload, type }) {
        state = payload;
        return state;
      },
  
      clearSaving(state) {
        state = false;
        return state;
      },
    },
});
  
export const savingActions = saveSlice.actions;