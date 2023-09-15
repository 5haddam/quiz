import React, { Component } from 'react';
import {
  Radio,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Button,
} from '@mui/material';
import { ButtonDiv, LabelForm } from './styled';

class OneAnswerQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: null,
    };
  }

  handleNext = () => {
    const { selectedValue } = this.state;
    const { handleSubmit, handleAnswerChange, currentQuestion } = this.props;
    if (selectedValue !== null && currentQuestion.options[selectedValue].isRight) handleAnswerChange(1);
    this.setState({ selectedValue: null });
    handleSubmit();
  };

  render() {
    const { currentQuestionIndex, currentQuestion, questionArrayLength } = this.props;

    return (
      <div>
        <div>
          <FormControl component="fieldset">
            <LabelForm>Select one answer:</LabelForm>
            <RadioGroup
              name={`question-${currentQuestionIndex}`}
              onChange={(e) => this.setState({ selectedValue: e.target.value })}
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
          <Button onClick={this.handleNext} variant="contained" color="primary">
            {currentQuestionIndex === questionArrayLength ? 'Finish' : 'Next Question'}
          </Button>
        </ButtonDiv>
      </div>
    );
  }
}

export default OneAnswerQuestion;
