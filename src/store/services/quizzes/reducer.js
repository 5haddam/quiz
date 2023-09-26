/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { moduleName } from './constants';
import actions from './actions';
import thunks from './thunks';

const initialState = {
  quizzes: [],
  filter: '',
  filteredQuizzes: [],
  isLoading: true,
  view: localStorage.getItem('view') || 'list',
};

export const quizzesReducer = createSlice({
  name: moduleName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actions.filterAction, (state, { payload }) => {
        state.filter = payload;
        state.filteredQuizzes = state.quizzes
          .filter((item) => `${item.title}${item.categories}`.replaceAll(' ', '').toLowerCase()
            .includes(payload.replaceAll(' ', '').toLowerCase()));
      })
      .addCase(actions.changeViewAction, (state, { payload }) => {
        state.view = payload;
        localStorage.setItem('view', payload);
      })
      .addCase(thunks.fetchQuizzes.fulfilled, (state, { payload }) => {
        state.quizzes = payload;
        state.filteredQuizzes = payload;
        state.isLoading = false;
      });
  },
});

export default quizzesReducer.reducer;
