import React from 'react';
import {
  Option, OptionList, QuestionCardDiv, QuestionText,
} from './styled';

const QuestionCard = ({ quiz, isRenderFullData }) => {
  const lastItemForRender = isRenderFullData ? quiz.questionsArray.length : 2;
  return (
    <>
      {quiz.questionsArray.slice(0, lastItemForRender).map((question, questionIndex) => (
        <QuestionCardDiv key={questionIndex}>
          <QuestionText>{question.question}</QuestionText>
          <OptionList>
            {question.options.map((option, optionIndex) => (
              <Option
                key={optionIndex}
              >
                {option.option}
              </Option>
            ))}
          </OptionList>
        </QuestionCardDiv>
      ))}
    </>
  );
};

export default QuestionCard;
