"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="mt-10 flex items-center text-center flex-col px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-black text-6xl font-bold leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        AI Search Assistant
        <br />
        <motion.span
          className="bg-gradient-to-r from-blue-500 via-indigo-500 to-rose-800 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          for Chrome
        </motion.span>
      </motion.h1>

      <motion.p
        className="text-gray-700 mt-4 max-w-xl mx-auto text-lg leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        The ultimate AI Chrome Extension to summarize articles in seconds.
        Enhance your focus, increase your efficiency, and take control of your
        time. Start today!
      </motion.p>

      <motion.button
        className="mt-6 bg-blue-600 text-white py-2 px-5 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md font-medium"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() =>
          document
            .getElementById("pricing")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        Get the Extension
      </motion.button>
    </motion.div>
  );
};

export default Hero;
