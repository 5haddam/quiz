import React from 'react';
import classes from './BigQuizCardPreview.module.css'
import QuestionCard from '../QestionCard/QuestionCard';

const BigQuizCardPreview = ({ quiz }) => {
  return (
    <>
      <div className={classes.quizContainer}>
        <div className={classes.questionList}>
          <QuestionCard quiz={quiz} isRenderFullData={true} />
        </div>
      </div>
    </>
  );
};

export default BigQuizCardPreview;
