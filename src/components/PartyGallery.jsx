import React from "react";
import AutoConfetti from "./AutoConfetti";
import { motion } from "framer-motion"; 

const partyImages = [
  "../../public/images/10.jpg",
  "../../public/images/2.jpg",
  "../../public/images/3.jpg",
  "../../public/images/4.jpg",
  "../../public/images/5.jpg",
  "../../public/images/6.jpg",
  "../../public/images/7.jpg",
  "../../public/images/8.jpg",
  "../../public/images/9.jpg",
  "../../public/images/1.jpg",
  "../../public/images/11.jpg",
  "../../public/images/12.jpg",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const PartyGallery = () => {
  return (
    <section className="p-8 bg-gradient-to-r from-blue-50 via-yellow-50 to-pink-50 rounded-2xl shadow-2xl mt-10 relative overflow-hidden">
      <AutoConfetti />

      <h2 className="text-5xl font-extrabold text-center mb-4 text-blue-500 animate-pulse">
        🎉 Remember Some of Your Old Memories
      </h2>
      <p className="text-center text-lg text-gray-700 mb-8">
        Wishing you a day full of love, laughter, and joy ❤️
      </p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {partyImages.map((img, idx) => (
          <motion.div
            key={idx}
            className="overflow-hidden rounded-2xl shadow-xl border-2 border-yellow-200 hover:shadow-2xl transition-shadow duration-500"
            variants={itemVariants}
          >
            <img
              src={img}
              alt={`Party ${idx + 1}`}
              className="w-full h-80 lg:h-96 object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PartyGallery;
