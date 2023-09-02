import React from 'react';
import classes from './QuizCard.module.css';
import QuestionCard from '../QestionCard/QuestionCard';

const QuizCard = ({ quiz, index }) => {
  return (
    <>
      <div key={index} className={classes.quizContainer}>
        <h2 className={classes.quizTitle}>{quiz.title}</h2>
        <div className={classes.questionList}>
          <QuestionCard quiz={quiz} />
        </div>
        <div className={classes.gradient}></div>
      </div>
    </>
  );
};

export default QuizCard;
