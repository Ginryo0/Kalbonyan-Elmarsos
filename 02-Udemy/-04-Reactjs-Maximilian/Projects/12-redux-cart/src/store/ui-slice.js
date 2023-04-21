import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartShown: false, notification: null },
  reducers: {
    toggle(state) {
      state.cartShown = !state.cartShown;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export default uiSlice;

export const uiActions = uiSlice.actions;
