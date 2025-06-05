import React, { useState, useEffect } from 'react';
import './App.css';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date()); 
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="clock-container">
      <h1>Digital Clock</h1>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  );
};

export default Clock;

