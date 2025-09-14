import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;
      if(diff <= 0){
        clearInterval(timer);
        onComplete();
        return;
      }
      const d = Math.floor(diff / 1000 / 60 / 60 / 24);
      const h = Math.floor(diff / 1000 / 60 / 60) % 24;
      const m = Math.floor(diff / 1000 / 60) % 60;
      const s = Math.floor(diff / 1000) % 60;
      setTimeLeft({ d, h, m, s });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="text-center text-2xl font-bold">
      {timeLeft.d} days {timeLeft.h} hours {timeLeft.m} minutes {timeLeft.s} seconds left
    </div>
  );
};

export default Countdown;
