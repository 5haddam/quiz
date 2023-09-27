/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { moduleName } from './constants';
import actions from './actions';

const initialState = {
  isMobile: window.innerWidth < 768,
};

export const ViewModeReducer = createSlice({
  name: moduleName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actions.toogleViewModeAction, (state, { payload }) => {
        state.isMobile = payload;
      });
  },
});

export default ViewModeReducer.reducer;
