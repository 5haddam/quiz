import React, { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import QuestionCard from '../../components/QuestionCards/QuestionCards';
import StartQuiz from '../../components/StartQuiz/StartQuiz';
import { QuizPreviewDiv } from './styled';
import thunks from '../../store/services/quizData/thunks';

const QuizPreview = () => {
  const { quizId } = useParams();
  const { isLoading } = useSelector((state) => state.quizDataReducer);
  const dispatch = useDispatch();

  const fetchQuizData = useCallback(async () => {
    try {
      await dispatch(thunks.fetchQuizData(quizId));
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchQuizData();
  }, [fetchQuizData]);

  return (
    <QuizPreviewDiv>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <StartQuiz quizId={quizId} />
          <Divider />
          <QuestionCard />
        </>
      )}
    </QuizPreviewDiv>
  );
};

export default QuizPreview;
