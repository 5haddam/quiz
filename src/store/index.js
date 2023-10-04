import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { quizzesReducer } from './services/quizzes';
import { quizDataReducer } from './services/quizData';
import { userInfoReducer } from './services/userInfo';
import { themeReducer } from './services/theme';
import { viewModeReducer } from './services/viewMode';
import { createQuizReducer } from './services/createQuiz';

const rootReducer = combineReducers({
  quizzesReducer,
  quizDataReducer,
  userInfoReducer,
  themeReducer,
  viewModeReducer,
  createQuizReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
