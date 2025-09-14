import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

const AutoConfetti = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showConfetti && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
    </>
  );
};

export default AutoConfetti;
