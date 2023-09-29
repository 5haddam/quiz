import { createAsyncThunk } from '@reduxjs/toolkit';
import { moduleName } from './constants';
import { API } from '../../../API/API';
import controller from '../../../API/controller';

const fetchQuizData = createAsyncThunk(`${moduleName}/fetchQuizData`, async (quizId) => {
  const response = controller(`${API}/quizzes/${quizId}/questions/${quizId}`);
  return response;
});

export default {
  fetchQuizData,
};
