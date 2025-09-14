import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

const BirthdayWish = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 60000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative p-16 bg-gradient-to-br from-pink-100 via-yellow-100 to-purple-200 rounded-4xl shadow-2xl mt-10 text-center overflow-hidden">
      {showConfetti && <Confetti recycle={true} numberOfPieces={300} gravity={0.2} />}

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className={`absolute text-pink-300 text-4xl animate-float`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 5}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          >
            ❤️
          </span>
        ))}
      </div>

      <h2 className="text-6xl md:text-7xl font-extrabold mb-8 text-pink-600 animate-pulse transform hover:scale-110 transition-transform duration-500">
        🎉 Happy Birthday, Mobassher! 🎂
      </h2>

      <p className="text-lg md:text-xl text-purple-800 mb-10 max-w-4xl mx-auto leading-relaxed animate-fadeIn">
        💖 Happy Birthday, my love! On this very special day, I want to remind
        you that you are my everything. You are not only my boyfriend but my
        best friend, my happiness, and my safe place. 🌹✨ I pray that your days
        are filled with joy, love, and endless success. May you live 100 years,
        and may I be by your side celebrating every single one of them. I am
        so blessed to have you in my life, and I promise to make each birthday
        more magical than the last. 💞 Always yours, Rima 💖
      </p>

      <div className="flex justify-center gap-6 flex-wrap animate-bounce mb-6">
        {["🎂", "🎉", "💖", "🥳", "🌟", "🍰", "🎈", "🎁", "✨"].map(
          (emoji, idx) => (
            <span
              key={idx}
              className={`text-5xl md:text-6xl animate-bounce`}
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              {emoji}
            </span>
          )
        )}
      </div>

      <div className="absolute bottom-10 left-0 w-full flex justify-center gap-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="text-yellow-400 text-2xl animate-spin-slow"
            style={{
              animationDuration: `${2 + Math.random() * 3}s`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
          >
            ✨
          </span>
        ))}
      </div>
    </section>
  );
};

export default BirthdayWish;
