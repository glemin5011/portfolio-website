import { createSlice } from "@reduxjs/toolkit";

interface AppState {
  theme: string;
}

const initialState: AppState = {
  theme: "white",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    changeTheme: (state, { payload }) => {
      state.theme = payload.theme;
    },
  },
});

export const { changeTheme } = appSlice.actions;
