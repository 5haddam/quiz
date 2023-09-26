import { Divider } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import QuizCardList from '../QuizCardList/QuizCardList';
import QuizCardTiles from '../QuizCardTiles/QuizCardTiles';
import { ViewModeWrapper } from './styled';

const Quizzes = () => {
  const { view, filteredQuizzes: quizzes } = useSelector((state) => state.quizzesReducer);
  return (
    <>
      {quizzes && quizzes.length !== 0
        ? (<ViewModeWrapper viewMode={view}>
          {quizzes.map((quiz, index) => (
            (view === 'list'
              && <div key={`quiz-${quiz.id}`}>
                <QuizCardList quiz={quiz} index={index} />
                {index !== quizzes.length - 1 && <Divider sx={{ margin: '25px 0' }} />}
              </div>
            )
            || (view === 'tiles' && <QuizCardTiles key={`quiz-${quiz.id}`} quiz={quiz} index={index} />)
          ))}
        </ViewModeWrapper>)
        : <h1>Quizzes not found</h1>}
    </>
  );
};

export default Quizzes;
