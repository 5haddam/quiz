import React, { Component } from 'react';
import OneAnswerQuestion from '../OneAnswerQuestion/OneAnswerQuestion';
import FewAnswerQuestion from '../FewAnswerQuestion/FewAnswerQuestion';
import { Title, TitleAndTimer } from './styled';
import Timer from '../Timer/Timer';

class QuestionCard extends Component {
  constructor({ quiz }) {
    super();
    this.quiz = quiz;
    this.handleAnswerChange = this.handleAnswerChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      points: 0,
      currentQuestionIndex: 0,
      showResults: false,
      time: {
        sec: 1,
        min: 0,
      },
      currentQuestion: quiz.questionsArray[0],
    };
  }

  handleAnswerChange = (addPoints) => {
    this.setState((prevState) => ({
      points: prevState.points + addPoints,
    }));
  };

  handleSubmit = () => {
    if (this.state.currentQuestionIndex < this.quiz.questionsArray.length - 1) {
      this.setState((prevState) => ({
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
      }));
    } else {
      this.setState({
        showResults: true,
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentQuestionIndex !== this.state.currentQuestionIndex) {
      this.setState({ currentQuestion: this.quiz.questionsArray[this.state.currentQuestionIndex] });
    }
  }

  render() {
    return (
      <>
        {this.state.showResults ? (
          <div>
            <Title>Quiz Results</Title>
            <p>Total Points: {this.state.points}</p>
            <h3>
              {`${this.state.time.min < 10 ? 0 : ''}${this.state.time.min}:`}
              {`${this.state.time.sec < 10 ? 0 : ''}${this.state.time.sec}`}
            </h3>
          </div>
        ) : (
          <div>
            <TitleAndTimer>
              <Title>{this.state.currentQuestion.question}</Title>
              <Timer
                time={this.state.time}
                setTime={(newTime) => this.setState({ time: newTime })}
                maxTime={this.quiz.maxTime}
                setShowResults={() => this.setState({ showResults: true })}
                showResults={this.state.showResults}
              />
            </TitleAndTimer>
            {this.state.currentQuestion.type === 'fewAnswers' ? (
              <FewAnswerQuestion
                handleSubmit={this.handleSubmit}
                currentQuestionIndex={this.state.currentQuestionIndex}
                handleAnswerChange={this.handleAnswerChange}
                currentQuestion={this.state.currentQuestion}
                questionArrayLength={this.quiz.questionsArray.length - 1}
              />
            ) : (
              <OneAnswerQuestion
                handleSubmit={this.handleSubmit}
                currentQuestionIndex={this.state.currentQuestionIndex}
                handleAnswerChange={this.handleAnswerChange}
                currentQuestion={this.state.currentQuestion}
                questionArrayLength={this.quiz.questionsArray.length - 1}
              />
            )}
          </div>
        )}
      </>
    );
  }
}

export default QuestionCard;
