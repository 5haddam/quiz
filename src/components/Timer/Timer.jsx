import React, { useEffect, useState } from 'react';

const Timer = ({
  time, setTime, maxTime, setShowResults,
}) => {
  const [timerCompleted, setTimerCompleted] = useState(false);

  const updateTimer = () => {
    setTime((prev) => {
      const newTime = { ...prev };

      if (newTime.sec < 59) newTime.sec += 1;
      else {
        newTime.min += 1;
        newTime.sec = 0;
      }

      if (newTime.min === maxTime) {
        let intervalId;
        clearInterval(intervalId);
        setTimerCompleted(true);
      }

      return newTime;
    });
  };

  useEffect(() => {
    let intervalId;

    if (!timerCompleted) {
      intervalId = setInterval(updateTimer, 1000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [timerCompleted]);

  useEffect(() => {
    if (timerCompleted) {
      setShowResults(true);
    }
  }, [timerCompleted, setShowResults]);

  return (
    <div>
      <h3>{`${time.min < 10 ? 0 : ''}${time.min}:${time.sec < 10 ? 0 : ''}${time.sec}`}</h3>
    </div>
  );
};

export default Timer;
