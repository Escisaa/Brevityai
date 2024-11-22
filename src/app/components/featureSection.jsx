"use client"; // Ensures this is a client-side component

import React from "react";
// Importing relevant icons from react-icons
import {
  AiOutlineFileSearch,
  AiOutlineGlobal,
  AiOutlineClockCircle,
  AiOutlineControl,
  AiOutlineAppstoreAdd,
  AiOutlineSafety,
} from "react-icons/ai";

function FeatureSection() {
  const Features = [
    {
      title: "AI-Powered Summaries",
      text: "Leverage GPT-4 to create accurate, concise summaries of any article within seconds.",
      icon: <AiOutlineFileSearch className="text-4xl text-blue-600 mb-6" />,
    },
    {
      title: "Multi-Language Support",
      text: "Supports multiple languages, allowing you to summarize articles in your preferred language.",
      icon: <AiOutlineGlobal className="text-4xl text-blue-600 mb-6" />,
    },
    {
      title: "Real-Time Processing",
      text: "Get real-time summaries, whether you’re reading news, blogs, or research papers.",
      icon: <AiOutlineClockCircle className="text-4xl text-blue-600 mb-6" />,
    },
    {
      title: "Customizable Summaries",
      text: "Adjust the length of summaries to meet your specific needs, from quick overviews to detailed insights.",
      icon: <AiOutlineControl className="text-4xl text-blue-600 mb-6" />,
    },
    {
      title: "Easy Integration",
      text: "Seamlessly integrate with your favorite tools and platforms like Chrome, WordPress, and more.",
      icon: <AiOutlineAppstoreAdd className="text-4xl text-blue-600 mb-6" />,
    },
    {
      title: "Data Privacy & Security",
      text: "We prioritize your privacy—your data is never shared or stored beyond the summarization process.",
      icon: <AiOutlineSafety className="text-4xl text-blue-600 mb-6" />,
    },
  ];

  return (
    <div id="features" className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      {/* Thin Divider Line */}
      <div className="border-t border-gray-300 mb-16"></div>

      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
          Powerful Features of Our Article Summarizer
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Our AI-driven platform offers a range of features to make your reading
          and content consumption more efficient.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-400 text-md text-center">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureSection;
