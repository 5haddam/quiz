import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CreateAndEditQuizMain from '../../components/CreateAndEditQuizMain/CreateAndEditQuizMain';
import thunks from '../../store/services/userInfo/thunks';
import { createQuizThunks } from '../../store/services/createQuiz';

const CreateQuizPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const { isAuth, userData } = useSelector((state) => state.userInfoReducer);
  const dispatch = useDispatch();

  const onSubmit = async ({ quizData, questionsData }) => {
    setIsLoading(true);
    const { payload: mainQuizData } = await dispatch(createQuizThunks.createQuizMainData({ quizData }));
    await dispatch(createQuizThunks.createQuizQuestionsData({ id: mainQuizData.id, questionsData }));
    await dispatch(thunks.changeUserData({
      id: userData.id,
      body: { ownQuizzes: [...userData.ownQuizzes, { id: mainQuizData.id, title: mainQuizData.title }] },
    }));
    setIsLoading(false);
  };

  const redirectToLoginPage = () => {
    if (!isAuth) navigate('/login');
  };

  useEffect(() => {
    redirectToLoginPage();
  }, [isAuth]);

  return (
    <CreateAndEditQuizMain onSubmit={onSubmit} isLoading={isLoading} />
  );
};

export default CreateQuizPage;
