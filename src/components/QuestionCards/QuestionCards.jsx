import React from 'react';
import { useSelector } from 'react-redux';
import {
  Option, OptionList, QuestionCardDiv, QuestionText,
} from './styled';

const QuestionCard = () => {
  const { quizData } = useSelector((state) => state.quizDataReducer);
  return (
    <>
      {quizData.questionsArray.map((question, questionIndex) => (
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
