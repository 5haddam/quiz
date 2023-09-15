import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from '@mui/material';
import controller from '../../API/controller';
import { API } from '../../API/API';
import Loader from '../../components/Loader/Loader';
import {
  QuizStartDiv, Title, imageGrid, titleGrid,
} from './styled';
import { MaxSizeImage } from '../../styles/styled';
import QuestionCard from '../../components/QuestionCard/QuestionCard';

const StartQuizPage = () => {
  const { quizId } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = useCallback(() => {
    const fetchingData = async () => {
      try {
        const result = await controller(`${API}/quizzes/${quizId}/questions/${quizId}`);
        setData(result);
        setIsLoading(false);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    };

    fetchingData();
  }, [quizId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <QuizStartDiv>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Grid container spacing={3}>
            <Grid item xs={8} sx={titleGrid}>
              <Title>{data.mainData.title}</Title>
            </Grid>
            <Grid item xs={4} sx={imageGrid}>
              <MaxSizeImage src={data.mainData.image} />
            </Grid>
          </Grid>
          <QuestionCard quiz={data} />
        </>
      )}
    </QuizStartDiv>
  );
};

export default StartQuizPage;
