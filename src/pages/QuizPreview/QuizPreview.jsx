import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Divider } from '@mui/material';
import controller from '../../API/controller';
import { API } from '../../API/API';
import Loader from '../../components/Loader/Loader';
import QuestionCard from '../../components/QuestionCards/QuestionCards';
import StartQuiz from '../../components/StartQuiz/StartQuiz';
import { QuizPreviewDiv } from './styled';

const QuizPreview = () => {
  const { quizId } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [[totalScore, numberOfRatings], setRating] = useState([0, 0]);
  const rating = numberOfRatings >= 1 ? totalScore / numberOfRatings : 0;

  const fetchData = useCallback(() => {
    const fetchingData = async () => {
      try {
        const result = await controller(`${API}/quizzes/${quizId}/questions/${quizId}`);
        setData(result);
        setIsLoading(false);
        setRating(result.mainData.rating);
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
    <QuizPreviewDiv>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <StartQuiz data={data} rating={rating} quizId={quizId} />
          <Divider />
          <QuestionCard quiz={data} />
        </>
      )}
    </QuizPreviewDiv>
  );
};

export default QuizPreview;
