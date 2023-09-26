/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { moduleName } from './constants';
import actions from './actions';

const initialState = {
  currentTheme: localStorage.getItem('theme') || 'dark',
};

export const themeReducer = createSlice({
  name: moduleName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actions.toogleCurrentThemeAction, (state) => {
        state.currentTheme = state.currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', state.currentTheme);
      });
  },
});

export default themeReducer.reducer;
