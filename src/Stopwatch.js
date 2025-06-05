import React, { useState, useEffect } from 'react';
import './App.css';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval); 
  }, [isRunning]);

  return (
    <div className="stopwatch-container">
      <h1>Stopwatch</h1>
      <h2>{time} sec</h2>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={() => { setTime(0); setIsRunning(false); }}>
        Reset
      </button>
    </div>
  );
};

export default Stopwatch;