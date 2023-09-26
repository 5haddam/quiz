import React from 'react';
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
} from '@mui/material';
import { ButtonDiv, LabelForm } from './styled';

class FewAnswerQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValues: {},
    };
  }

  handleNext = () => {
    const selectedValuesArray = Object.keys(this.state.selectedValues)
      .filter((key) => this.state.selectedValues[key] === true);
    let points = 0;
    selectedValuesArray.forEach((value) => {
      if (this.props.currentQuestion.options[value].isRight) {
        points += 1;
      } else {
        points -= 1;
      }
    });
    this.props.handleAnswerChange(points >= 0 ? points : 0);
    this.props.handleSubmit();
  };

  render() {
    return (
      <div>
        <div>
          <FormControl component="fieldset">
            <LabelForm>Select one or more answers:</LabelForm>
            {this.props.currentQuestion.options.map((option, optionIndex) => (
              <FormControlLabel
                control={
                  <Checkbox
                    name={`${optionIndex}`}
                    onChange={(e) => this.setState({
                      selectedValues: { ...this.state.selectedValues, [e.target.name]: e.target.checked },
                    })}
                  />
                }
                label={option.option}
                key={optionIndex}
              />
            ))}
          </FormControl>
        </div>
        <ButtonDiv>
          <Button onClick={this.handleNext} variant="contained" color="primary">
            {this.props.currentQuestionIndex === this.props.questionArrayLength ? 'Finish' : 'Next Question'}
          </Button>
        </ButtonDiv>
      </div>
    );
  }
}

export default FewAnswerQuestion;
