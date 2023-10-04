/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { moduleName } from './constants';
import thunks from './thunks';
import actions from './actions';

const initialState = {
  userData: undefined,
  usersData: undefined,
  ratings: {},
  isAuth: JSON.parse(localStorage.getItem('isAuth') || false),
};

export const userInfoReducer = createSlice({
  name: moduleName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(thunks.fetchUserData.fulfilled, (state, { payload }) => {
        if (!payload) {
          state.isAuth = false;
          localStorage.setItem('isAuth', false);
          localStorage.setItem('userId', null);
        } else {
          state.userData = payload;
          state.isAuth = true;
          state.ratings = payload.ratings;
          localStorage.setItem('isAuth', true);
        }
      })
      .addCase(thunks.fetchUsersData.fulfilled, (state, { payload }) => {
        state.usersData = payload;
      })
      .addCase(thunks.sendRaitingData.fulfilled, (state, { payload }) => {
        state.userData = payload;
        state.ratings = payload.ratings;
      })
      .addCase(thunks.changeUserData.fulfilled, (state, { payload }) => {
        state.userData = payload;
        state.ratings = payload.ratings;
      })
      .addCase(thunks.createUser.fulfilled, (state, { payload }) => {
        state.userData = payload;
        state.isAuth = true;
        localStorage.setItem('isAuth', true);
        localStorage.setItem('userId', payload.id);
      })
      .addCase(actions.isAuthChangeAction, (state, { payload }) => {
        state.isAuth = payload;
        localStorage.setItem('isAuth', payload);
        if (!payload) localStorage.setItem('userId', null);
      })
      .addCase(actions.setUserData, (state, { payload }) => {
        state.userData = payload;
      })
      .addCase(actions.setRaitingDataAction, (state, { payload }) => {
        state.ratings = { ...state.ratings, [payload.title]: payload.value };
        console.log(state.rating);
      });
  },
});

export default userInfoReducer.reducer;
