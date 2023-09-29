import { createAsyncThunk } from '@reduxjs/toolkit';
import { moduleName } from './constants';
import { API } from '../../../API/API';
import controller from '../../../API/controller';

const fetchQuizzes = createAsyncThunk(`${moduleName}/fetchQuizzes`, async () => {
  const response = controller(`${API}/quizzes`);
  return response;
});

export default {
  fetchQuizzes,
};
