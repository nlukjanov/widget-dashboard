import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const currentTime = () => {
    setTime(new Date());
  };
  useEffect(() => {
    setInterval(() => {
      currentTime();
    }, 1000);
  }, []);
  return <div>{time.toLocaleTimeString()}</div>;
};

export default Clock;
