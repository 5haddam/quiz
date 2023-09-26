import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Rating } from '@mui/material';
import OneAnswerQuestion from '../OneAnswerQuestion/OneAnswerQuestion';
import FewAnswerQuestion from '../FewAnswerQuestion/FewAnswerQuestion';
import { ResultsWrapper, Title, TitleAndTimer } from './styled';
import Timer from '../Timer/Timer';
import thunks from '../../store/services/userInfo/thunks';
import actions from '../../store/services/userInfo/actions';

const QuestionCard = () => {
  const [points, setPoints] = useState(0);
  const [isReadOnly, setIsReadOnly] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [time, setTime] = useState({
    sec: 1,
    min: 0,
  });
  const { quizData: quiz } = useSelector((state) => state.quizDataReducer);
  const { isAuth, userData, ratings } = useSelector((state) => state.userInfoReducer);

  const dispatch = useDispatch();

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
        <ResultsWrapper>
          <div>
            <Title>Quiz Results</Title>
            <p>Total Points: {points}</p>
            <h3>{`${time.min < 10 ? 0 : ''}${time.min}:${time.sec < 10 ? 0 : ''}${time.sec}`}</h3>
          </div>
          {isAuth
            && <Rating
              name="simple-controlled"
              value={
                Object.prototype.hasOwnProperty.call(ratings, quiz.mainData.title)
                  ? ratings[quiz.mainData.title]
                  : 0}
              onChange={async (event, value) => {
                dispatch(actions.setRaitingDataAction({ title: quiz.mainData.title, value }));
                setIsReadOnly(true);
                await dispatch(thunks.sendRaitingData({
                  userId: userData.id, title: quiz.mainData.title, quiz, value, ratings,
                }));
              }}
              readOnly={isReadOnly}
            />
          }
        </ResultsWrapper>
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
