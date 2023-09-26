import React from 'react';
import { useSelector } from 'react-redux';
import controller from '../../API/controller';
import { API, userAndCategoriesAPI } from '../../API/API';
import Loader from '../Loader/Loader';

const CrateQuizForm = ({ id }) => { // test version
  const body = id;
  const { userData } = useSelector((state) => state.userInfoReducer);
  const createQuiz = async () => {
    controller(`${userAndCategoriesAPI}/users${id}`, 'PUT', {});
    const quizData = await controller(`${API}/quizzes`, 'POST', body);
    controller(`${API}/users/${quizData.id}/questions`, 'POST', body);
  };
  return (
    <>
      {userData
        ? <form onSubmit={createQuiz}><button type='submit'>Create</button></form>
        : <Loader />}
    </>
  );
};

export default CrateQuizForm;
