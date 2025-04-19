import { createSlice } from "@reduxjs/toolkit";

const initialGeneralState = {
  loggedIn: false,
  isSystemShutDown: false,
  goodEnd: null,
};

const generalSlice = createSlice({
  name: "general",
  initialState: initialGeneralState,
  reducers: {
    login(state) {
      state.loggedIn = true;
    },
    logout(state) {
      state.loggedIn = false;
    },
    shutDownSystem(state, action) {
      if (action.payload === false) {
        state.goodEnd = false;
      } else {
        state.goodEnd = true;
      }
      state.isSystemShutDown = true;
    },
  },
});

export default generalSlice.reducer;
export const { login, logout, shutDownSystem } = generalSlice.actions;
