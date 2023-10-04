/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { moduleName } from './constants';
// import thunks from './thunks';

const initialState = {
  rating: 0,
};

export const createQuizReducer = createSlice({
  name: moduleName,
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(thunks.createQuizMainData.fulfilled, (state) => {
  //       state.isLoading = true;
  //     })
  //     .addCase(thunks.createQuizQuestionsData.fulfilled, (state, { payload }) => {
  //       state.quizData = payload;
  //       const [totalScore, numberOfRatings] = payload.mainData.rating;
  //       state.rating = numberOfRatings >= 1 ? totalScore / numberOfRatings : 0;
  //       state.isLoading = false;
  //     });
  // },
});

export default createQuizReducer.reducer;
