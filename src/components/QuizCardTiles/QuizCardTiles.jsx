import React from 'react';
import {
  LinkqQuizTiles, QuizTilesDiv, QuizTilesImage, QuizTitle, QuizTitleDiv,
} from './styled';

const QuizCardTiles = ({ quiz }) => (
    <LinkqQuizTiles to={`quiz/${quiz.id}`}>
      <QuizTilesDiv>
        <QuizTilesImage src={quiz.image}/>
        <QuizTitleDiv>
          <QuizTitle>{quiz.title}</QuizTitle>
        </QuizTitleDiv>
      </QuizTilesDiv>
    </LinkqQuizTiles>
);

export default QuizCardTiles;
