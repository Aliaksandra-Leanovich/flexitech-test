import { useState, useRef, useEffect } from "react";

export const useTimer = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const startTimeRef = useRef<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (running) {
      startTimeRef.current = performance.now() - time;
      intervalRef.current = setInterval(() => {
        setTime(performance.now() - startTimeRef.current!);
      }, 100);
    } else {
      clearInterval(intervalRef.current!);
    }

    return () => clearInterval(intervalRef.current!);
  }, [running, time]);

  const startPause = () => setRunning((prev) => !prev);

  const reset = () => {
    setRunning(false);
    setTime(0);
    startTimeRef.current = null;
  };

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor(ms % 1000);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}.${String(milliseconds).padStart(3, "0")}`;
  };

  return { time, startPause, reset, formatTime };
};
