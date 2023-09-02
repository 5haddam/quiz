import React from 'react';
import classes from './QuestionCard.module.css';

const QuestionCard = ({ quiz, isRenderFullData }) => {
  const lastItemForRender = isRenderFullData ? quiz.questionArray.length : 2;
  return (
    <>
      {quiz.questionArray.slice(0, lastItemForRender).map((question, questionIndex) => (
        <div key={questionIndex} className={classes.questionCard}>
          <h3 className={classes.questionText}>{question.question}</h3>
          <ul className={classes.optionList}>
            {question.options.map((option, optionIndex) => (
              <li
                key={optionIndex}
                className={classes.option}
              >
                {option.option}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default QuestionCard;
