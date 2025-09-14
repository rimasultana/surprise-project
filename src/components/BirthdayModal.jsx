import React, { useState } from "react";

const BirthdayModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600 transition"
      >
        Show Surprise
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div
            className="bg-white p-8 rounded-lg text-center relative shadow-lg overflow-hidden 
                       transform transition-all duration-500 animate-scaleIn"
          >
            {/* Heading */}
            <h2 className="text-3xl font-bold mb-4 animate-bounce fade-in">
              Happy Birthday, Mobasser Khandaker!
            </h2>

            {/* Subtext */}
            <p className="mb-4 animate-pulse fade-in-delay">
              🎂💖 Surprise from Rima
            </p>

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
            >
              Close
            </button>

            {/* Confetti/Falling Dots */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(60)].map((_, i) => {
                const colors = ["#ec4899", "#facc15", "#22d3ee", "#4ade80", "#f87171"];
                const size = Math.random() * 6 + 4; // 4px - 10px
                const color = colors[Math.floor(Math.random() * colors.length)];
                return (
                  <span
                    key={i}
                    className="absolute rounded-full animate-fall-spin"
                    style={{
                      left: `${Math.random() * 100}%`,
                      width: `${size}px`,
                      height: `${size}px`,
                      backgroundColor: color,
                      animationDuration: `${Math.random() * 3 + 2}s`,
                      top: `${-Math.random() * 20}%`,
                    }}
                  ></span>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* CSS animations */}
      <style>{`
        /* Modal Scale In */
        @keyframes scaleIn {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
        }

        /* Fade In */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .fade-in {
          animation: fadeIn 1s ease forwards;
        }
        .fade-in-delay {
          animation: fadeIn 1.2s ease forwards;
        }

        /* Confetti Fall + Spin */
        @keyframes fallSpin {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(120vh) rotate(720deg);
            opacity: 0;
          }
        }
        .animate-fall-spin {
          animation-name: fallSpin;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </>
  );
};

export default BirthdayModal;
