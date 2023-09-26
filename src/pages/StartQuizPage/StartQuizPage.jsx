import React, { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import {
  QuizStartDiv, Title, imageGrid, titleGrid,
} from './styled';
import QuestionCard from '../../components/QuestionCard/QuestionCard';
import { MaxSizeImage } from '../../styles/styled';
import thunks from '../../store/services/quizData/thunks';

const StartQuizPage = () => {
  const { quizId } = useParams();
  const { isLoading, quizData } = useSelector((state) => state.quizDataReducer);
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
    if (quizData.id !== quizId) fetchQuizData();
  }, [fetchQuizData]);
  return (
    <QuizStartDiv>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Grid container spacing={3}>
            <Grid item xs={8} sx={titleGrid}>
              <Title>{quizData.mainData.title}</Title>
            </Grid>
            <Grid item xs={4} sx={imageGrid}>
              <MaxSizeImage src={quizData.mainData.image} />
            </Grid>
          </Grid>
          <QuestionCard />
        </>
      )}
    </QuizStartDiv>
  );
};

export default StartQuizPage;
