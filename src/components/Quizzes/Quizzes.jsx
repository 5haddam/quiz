import { Divider } from '@mui/material';
import React from 'react';
import QuizCardList from '../QuizCardList/QuizCardList';
import QuizCardTiles from '../QuizCardTiles/QuizCardTiles';
import { ViewModeWrapper } from './styled';

const Quizzes = ({ quizzes, viewMode, setSearchParams }) => (
  <>
    {quizzes
      ? (<ViewModeWrapper viewMode={viewMode}>
        {quizzes.map((quiz, index) => (
          (viewMode === 'list'
            && <div key={`quiz-${quiz.id}`}>
              <QuizCardList quiz={quiz} index={index} setSearchParams={setSearchParams} />
              {index !== quizzes.length - 1 && <Divider sx={{ margin: '25px 0' }} />}
            </div>
          )
          || (viewMode === 'tiles' && <QuizCardTiles key={`quiz-${quiz.id}`} quiz={quiz} index={index} />)
        ))}
      </ViewModeWrapper>)
      : <h1>Quizzes not found</h1>}
  </>
);

export default Quizzes;
