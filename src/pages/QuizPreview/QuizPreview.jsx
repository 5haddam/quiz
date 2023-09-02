import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import controller from '../../API/controller';
import API from '../../API/API';
import Loader from '../../components/Loader/Loader';
import BigQuizCardPreview from '../../components/BigQuizCardPreview/BigQuizCardPreview';
import { Button, Rating } from '@mui/material';
import classes from './QuizPreview.module.css';

const QuizPreview = () => {
  const { quizId } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await controller(`${API}/quizzes/${quizId}`);
        setData(result);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  });

  return (
    <div style={{ width: '100%', padding: '20px', maxWidth: '1000px', margin: '75px auto' }} >
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1 style={{ textAlign: "center" }}>{data.title}</h1>
          <div className={classes.getReadyForTheQuiz}>
            <Rating name="read-only" value={data.rating} readOnly />
            <Link to={`/quiz/start/${quizId}`}>
              <Button>Start quiz</Button>
            </Link>
          </div>
          <BigQuizCardPreview quiz={data} />
        </>
      )}
    </div>
  );
};

export default QuizPreview;
