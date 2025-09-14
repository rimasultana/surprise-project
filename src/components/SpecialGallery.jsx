import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

const specialImages = Array.from(
  { length: 20 },
  (_, i) => `/speciall-images/${i + 1}.jpg`
);

const SpecialGallery = () => {
  const [current, setCurrent] = useState(0);
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % specialImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 60000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="p-8 bg-pink-50 rounded-2xl shadow-xl mt-8 text-center relative overflow-hidden">
      {showConfetti && (
        <Confetti recycle={true} numberOfPieces={150} gravity={0.3} />
      )}

      <h2 className="text-5xl font-extrabold mb-4 text-pink-500 animate-pulse">
        💖 Our Special Moments
      </h2>
      <p className="text-lg text-pink-700 mb-8 max-w-2xl mx-auto">
        Cherishing memories together — every picture tells a story of love and
        happiness. 🌟
      </p>

      <div className="flex justify-center">
        <div className="overflow-hidden rounded-3xl shadow-2xl border-4 border-pink-300 w-full max-w-4xl aspect-[16/9] relative">
          {specialImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Special ${idx + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 rounded-3xl ${
                idx === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialGallery;
