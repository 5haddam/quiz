import React, { useEffect, useState } from 'react';

const Timer = ({
  time, setTime, maxTime, setShowResults,
}) => {
  const [timerCompleted, setTimerCompleted] = useState(false);

  useEffect(() => {
    let intervalId;

    const updateTimer = () => {
      const newTime = { ...time };

      if (newTime.sec < 59) newTime.sec += 1;
      else {
        newTime.min += 1;
        newTime.sec = 0;
      }

      if (newTime.min === maxTime) {
        clearInterval(intervalId);
        setTimerCompleted(true);
      }

      setTime(newTime);
    };

    if (!timerCompleted) {
      intervalId = setInterval(updateTimer, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [timerCompleted, maxTime, time, setTime]);

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
