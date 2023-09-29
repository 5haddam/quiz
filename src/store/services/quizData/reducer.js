/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { moduleName } from './constants';
import thunks from './thunks';

const initialState = {
  quizData: {},
  isLoading: true,
  rating: 0,
};

export const quizDataReducer = createSlice({
  name: moduleName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(thunks.fetchQuizData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(thunks.fetchQuizData.fulfilled, (state, { payload }) => {
        state.quizData = payload;
        const [totalScore, numberOfRatings] = payload.mainData.rating;
        state.rating = numberOfRatings >= 1 ? totalScore / numberOfRatings : 0;
        state.isLoading = false;
      });
  },
});

export default quizDataReducer.reducer;
