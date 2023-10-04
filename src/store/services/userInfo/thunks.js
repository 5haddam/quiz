import { createAsyncThunk } from '@reduxjs/toolkit';
import { moduleName } from './constants';
import { API, userAndCategoriesAPI } from '../../../API/API';
import controller from '../../../API/controller';

const fetchUserData = createAsyncThunk(`${moduleName}/fetchUserData`, async (userId) => {
  const response = controller(`${userAndCategoriesAPI}/users/${userId}`);
  return response;
});

const fetchUsersData = createAsyncThunk(`${moduleName}/fetchUsersData`, async () => {
  const response = controller(`${userAndCategoriesAPI}/users`);
  return response;
});

const createUser = createAsyncThunk(`${moduleName}/createUser`, async (body) => {
  const response = controller(`${userAndCategoriesAPI}/users`, 'POST', body);
  return response;
});

const changeUserData = createAsyncThunk(`${moduleName}/changeUserData`, async (params) => {
  const response = controller(`${userAndCategoriesAPI}/users/${params.id}`, 'PUT', params.body);
  return response;
});

const sendRaitingData = createAsyncThunk(`${moduleName}/sendRaitingData`, async ({
  userId,
  title,
  value,
  ratings,
  quiz,
}) => {
  const userBody = {
    ratings: {
      ...ratings,
      [title]: value,
    },
  };
  const [overallRating, numberOfRatings] = quiz.mainData.rating;
  const newOverallRating = Object.keys(ratings).includes(title)
    ? overallRating - ratings[title] + value
    : overallRating + value;
  const newNumberOfRatings = Object.keys(ratings).includes(title)
    ? numberOfRatings
    : numberOfRatings + 1;
  const quizBody = {
    rating: [newOverallRating, newNumberOfRatings],
  };
  console.log(quizBody);
  controller(`${API}/quizzes/${quiz.mainData.id}`, 'PUT', quizBody);
  const response = controller(`${userAndCategoriesAPI}/users/${userId}`, 'PUT', userBody);
  return response;
});

export default {
  fetchUserData,
  fetchUsersData,
  createUser,
  sendRaitingData,
  changeUserData,
};
