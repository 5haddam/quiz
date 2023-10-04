import React, { useState } from 'react';
import {
  Radio,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Button,
} from '@mui/material';
import { ButtonDiv, LabelForm } from './styled';

const OneAnswerQuestion = ({
  handleSubmit,
  currentQuestionIndex,
  handleAnswerChange,
  currentQuestion,
  questionArrayLength,
}) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleNext = () => {
    if (selectedValue !== null && currentQuestion.options[selectedValue].isRight) handleAnswerChange(1);
    setSelectedValue(null);
    handleSubmit();
  };

  return (
    <div>
      <div>
        <FormControl component="fieldset">
          <LabelForm>Select one answer:</LabelForm>
          <RadioGroup
            name={`question-${currentQuestionIndex}`}
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
          >
            {currentQuestion.options.map((option, optionIndex) => (
              <FormControlLabel
                key={optionIndex}
                value={optionIndex.toString()}
                control={<Radio />}
                label={option.option}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </div>
      <ButtonDiv>
        <Button onClick={handleNext} variant="contained" color="primary">
          {currentQuestionIndex === questionArrayLength ? 'Finish' : 'Next Question'}
        </Button>
      </ButtonDiv>
    </div>
  );
};

export default OneAnswerQuestion;
