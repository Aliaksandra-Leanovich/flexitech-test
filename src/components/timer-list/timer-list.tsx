import React, { useState } from "react";

import "./timer-list.styles.scss"


const TimerList: React.FC = () => {
  const [timers, setTimers] = useState<number[]>([]);

  const addTimer = () => {
    setTimers((prev) => [...prev, Date.now()]);
  };

  const removeLastTimer = () => {
    setTimers((prev) => prev.slice(0, -1));
  };

  return (
    <div className="timer-list">
      <div className="timer-list__buttons">
        <button onClick={addTimer}>Add Timer</button>
        <button onClick={removeLastTimer} disabled={!timers.length}>
          Remove
        </button>
      </div>
      <div className="timer-list__container">
        Timer
      </div>
    </div>
  );
};

export default TimerList;
