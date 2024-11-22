"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaRegTired,
  FaRegClock,
  FaBookReader,
  FaRegTimesCircle,
} from "react-icons/fa";

const ProblemSection = () => {
  const problems = [
    {
      title: "Information Overload",
      text: "With endless articles, research papers, and blog posts, it's hard to stay informed without spending hours reading.",
      icon: <FaRegTired className="text-4xl text-red-500 mb-4" />,
    },
    {
      title: "Time Constraints",
      text: "Busy schedules make it nearly impossible to dedicate enough time to thoroughly read and understand everything.",
      icon: <FaRegClock className="text-4xl text-blue-500 mb-4" />,
    },
    {
      title: "Complex Content",
      text: "Some articles are overly complex, making it difficult to extract key insights quickly.",
      icon: <FaBookReader className="text-4xl text-purple-500 mb-4" />,
    },
    {
      title: "Missing Critical Insights",
      text: "Skimming through content often means missing crucial information or context.",
      icon: <FaRegTimesCircle className="text-4xl text-orange-500 mb-4" />,
    },
  ];

  return (
    <div className="py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent">
          The Problem We're Solving
        </h2>
        <p className="text-gray-700 mt-4 text-lg">
          Modern readers face challenges that make consuming information
          overwhelming and inefficient.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {problems.map((problem, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.6 }}
          >
            <div className="flex justify-center">{problem.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4 text-center">
              {problem.title}
            </h3>
            <p className="text-gray-600 mt-2 text-center">{problem.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProblemSection;
