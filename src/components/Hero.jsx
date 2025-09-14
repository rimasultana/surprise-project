import React, { useState } from "react";
import cake from "./../../public/cake.jpg";
import BirthdayModal from "./BirthdayModal";
import Confetti from "react-confetti";
import AutoConfetti from "./AutoConfetti";

const BirthdayMessageModal = ({ isOpen, onClose, age }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg w-80 text-center relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>
        <p className="text-2xl font-bold mb-2">
          🎂 You are now {age} years old! 🎉
        </p>
        <p className="text-lg text-blue-500 font-semibold">
          Happy Birthday, Mobassher! 💖
        </p>
      </div>
    </div>
  );
};

const Hero = () => {
  const [showSurprise, setShowSurprise] = useState(false);
  const [bgAnimate, setBgAnimate] = useState(false);
  const [birthdayModalOpen, setBirthdayModalOpen] = useState(false);

  const handleEmojiClick = () => {
    setBirthdayModalOpen(true);
    setShowSurprise(true);
    setBgAnimate(true);
  };

  const age = 22;

  return (
    <section
      id="hero"
      className={`flex flex-col animate-fall md:flex-row items-center justify-between gap-6 p-6 rounded-lg shadow-md mt-6 transition-all duration-1000 ${
        bgAnimate
          ? "bg-gradient-to-r from-pink-200 via-yellow-200 to-green-200"
          : "bg-gradient-to-r from-blue-50 to-green-50"
      }`}
    >
      <AutoConfetti />
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4">
          Happy Birthday, Mobassher Khandakar!
        </h1>

        <p className="text-gray-700 mb-4">
          Countdown to your special day!{" "}
          <span
            className="cursor-pointer inline-block hover:scale-125 transition-transform"
            onClick={handleEmojiClick}
          >
            🎉
          </span>
        </p>

        <div className="mt-4">
          <BirthdayModal />
        </div>

        {/* Surprise & Age Reveal */}
        {showSurprise &&  (
          <div className="mt-4 text-center md:text-left relative">
            <p className="text-2xl text-pink-500 font-bold animate-bounce">
              🎂 You are now {age} years old! 🎉
            </p>
            <p className="text-lg text-blue-500 font-semibold mt-2 animate-pulse">
              Happy Birthday, Mobassher! 💖
            </p>

            <Confetti
              width={window.innerWidth}
              height={window.innerHeight}
              recycle={false}
            />
          </div>
        )}

        <BirthdayMessageModal
          isOpen={birthdayModalOpen}
          onClose={() => setBirthdayModalOpen(false)}
          age={age}
        />
      </div>

      <div className="flex-1">
        <img src={cake} alt="Birthday Cake" className="rounded-lg shadow-md" />
      </div>
    </section>
  );
};

export default Hero;
