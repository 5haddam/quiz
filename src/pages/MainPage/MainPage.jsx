import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import ToggleViewMode from '../../components/ToggleViewMode/ToggleViewMode';
import { CenteredText, MainDiv } from './styled';
import Quizzes from '../../components/Quizzes/Quizzes';
import Search from '../../components/Search/Search';
import thunks from '../../store/services/quizzes/thunks';

const MainPage = () => {
  const { isLoading } = useSelector((state) => state.quizzesReducer);
  const dispatch = useDispatch();

  const fetchQuizzesList = useCallback(async () => {
    try {
      await dispatch(thunks.fetchQuizzes());
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchQuizzesList();
  }, [fetchQuizzesList]);

  return (
    <MainDiv>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <CenteredText>Choose your quiz!!!</CenteredText>
          <Search />
          <ToggleViewMode />
          <Quizzes />
        </>
      )}
    </MainDiv>
  );
};

export default MainPage;
