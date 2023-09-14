import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
} from '@mui/material';
import { ButtonDiv, LabelForm } from './styled';

const FewAnswerQuestion = ({
  handleSubmit,
  currentQuestionIndex,
  handleAnswerChange,
  currentQuestion,
  questionArrayLength,
}) => {
  const [selectedValues, setSelectedValues] = useState({});

  const handleNext = () => {
    const selectedValuesArray = Object.keys(selectedValues).filter((key) => selectedValues[key] === true);
    let points = 0;
    selectedValuesArray.forEach((value) => {
      if (currentQuestion.options[value].isRight) {
        points += 1;
      } else {
        points -= 1;
      }
    });
    handleAnswerChange(points >= 0 ? points : 0);
    handleSubmit();
  };

  return (
    <div>
      <div>
        <FormControl component="fieldset">
          <LabelForm>Select one or more answers:</LabelForm>
          {currentQuestion.options.map((option, optionIndex) => (
            <FormControlLabel
              control={
                <Checkbox
                  name={`${optionIndex}`}
                  onChange={(e) => setSelectedValues({ ...selectedValues, [e.target.name]: e.target.checked })}
                />
              }
              label={option.option}
              key={optionIndex}
            />
          ))}
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

export default FewAnswerQuestion;
