import React, { useState } from 'react';
import OneAnswerQuestion from '../OneAnswerQuestion/OneAnswerQuestion';
import FewAnswerQuestion from '../FewAnswerQuestion/FewAnswerQuestion';
import { Title, TitleAndTimer } from './styled';
import Timer from '../Timer/Timer';

const QuestionCard = ({ quiz }) => {
  const [points, setPoints] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [time, setTime] = useState({
    sec: 1,
    min: 0,
  });

  const handleAnswerChange = (addPoints) => {
    setPoints(points + addPoints);
  };

  const handleSubmit = () => {
    if (currentQuestionIndex < quiz.questionsArray.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const currentQuestion = quiz.questionsArray[currentQuestionIndex];

  return (
    <>
      {showResults ? (
        <div>
          <Title>Quiz Results</Title>
          <p>Total Points: {points}</p>
          <h3>{`${time.min < 10 ? 0 : ''}${time.min}:${time.sec < 10 ? 0 : ''}${time.sec}`}</h3>
        </div>
      ) : (
        <div>
          <TitleAndTimer>
            <Title>{currentQuestion.question}</Title>
            <Timer
              time={time}
              setTime={setTime}
              maxTime={quiz.maxTime}
              setShowResults={setShowResults}
              showResults={showResults}
            />
          </TitleAndTimer>
          {currentQuestion.type === 'fewAnswers' ? (
            <FewAnswerQuestion
              handleSubmit={handleSubmit}
              currentQuestionIndex={currentQuestionIndex}
              handleAnswerChange={handleAnswerChange}
              currentQuestion={currentQuestion}
              questionArrayLength={quiz.questionsArray.length - 1}
            />
          ) : (
            <OneAnswerQuestion
              handleSubmit={handleSubmit}
              currentQuestionIndex={currentQuestionIndex}
              handleAnswerChange={handleAnswerChange}
              currentQuestion={currentQuestion}
              questionArrayLength={quiz.questionsArray.length - 1}
            />
          )}
        </div>
      )}
    </>
  );
};

export default QuestionCard;
