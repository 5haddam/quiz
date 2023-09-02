import React, { useState, useEffect } from 'react';
import controller from '../API/controller';
import API from '../API/API';
import classes from '../styles/MainPage.module.css'
import Loader from '../components/Loader/Loader';
import { Link } from 'react-router-dom';
import QuizCard from '../components/QuizCard/QuizCard';


const MainPage = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await controller(`${API}/quizzes`);
        setData(result);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={classes.main}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1 style={{textAlign: "center"}}>Choose your quiz!!!</h1>
          {data.map((quiz, index) => (
            <Link key={index} to={`quiz/${quiz.id}`} className={classes.link}>
              <QuizCard quiz={quiz} index={index} isRenderFullData={false} />
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default MainPage;
