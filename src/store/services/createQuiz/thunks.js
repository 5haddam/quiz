import { createAsyncThunk } from '@reduxjs/toolkit';
import { moduleName } from './constants';
import { API } from '../../../API/API';
import controller from '../../../API/controller';

const createQuizMainData = createAsyncThunk(`${moduleName}/createUser`, async ({ quizData }) => {
  const response = controller(`${API}/quizzes`, 'POST', quizData);
  return response;
});

const createQuizQuestionsData = createAsyncThunk(
  `${moduleName}/createQuizQuestionsData`,
  async ({ id, questionsData }) => {
    const response = controller(`${API}/quizzes/${id}/questions`, 'POST', questionsData);
    return response;
  },
);

export default {
  createQuizMainData,
  createQuizQuestionsData,
};
