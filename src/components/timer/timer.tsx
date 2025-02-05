import React from "react";

import { useTimer } from "../../hooks";

import './timer.styles.scss'


const Timer = () => {
  const { time, startPause, reset, formatTime } = useTimer();

  return (
    <div className="timer">
      <p className="timer__time">{formatTime(time)}</p>
      <div className="timer__buttons">
        <button onClick={startPause}>Start / Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
