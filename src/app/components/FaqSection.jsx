"use client"; // Ensures this is a client-side component

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Manage which FAQ item is open

  const faqItems = [
    {
      question: "What is BrevityAI?",
      answer:
        "BrevityAI is an AI-powered tool that uses GPT-4 to create concise summaries of long articles, making it easier for you to grasp the main points.",
    },
    {
      question: "Who can benefit from BrevityAI?",
      answer:
        "BrevityAI is perfect for students, professionals, researchers, or anyone looking to save time by quickly understanding lengthy content.",
    },
    {
      question: "Does BrevityAI work on all types of content?",
      answer:
        "BrevityAI is designed to work on a wide range of text, including articles, blogs, research papers, and more. However, it may not support content with poor formatting or incomplete sentences.",
    },
    {
      question: "What is the payment model for BrevityAI?",
      answer:
        "BrevityAI is a one-time payment tool, giving you unlimited lifetime access to all features. No recurring fees or subscriptions.",
    },
    {
      question: "Will BrevityAI receive updates?",
      answer:
        "Yes! We are constantly working to improve BrevityAI and release updates to enhance its performance and add new features, ensuring the best experience for our users.",
    },
    {
      question: "How accurate are the summaries?",
      answer:
        "BrevityAI provides highly accurate summaries by leveraging GPT-4's advanced capabilities. However, we recommend reviewing the output for critical decisions, as no AI tool is perfect.",
    },
    {
      question: "Is my data safe with BrevityAI?",
      answer:
        "Yes, we prioritize your data privacy and do not share or store your data beyond the summarization process.",
    },
    {
      question: "What if I encounter issues while using BrevityAI?",
      answer:
        "Our support team is here to help! Reach out to us via the support page, and we'll assist you promptly.",
    },
  ];

  // Toggle between open and close on click
  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="faq" className="bg-white py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-black text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`border rounded-lg overflow-hidden ${
                activeIndex === index ? "bg-gray-100" : ""
              }`}
            >
              <button
                className="w-full flex items-center justify-between bg-white px-6 py-4 text-left text-lg font-medium hover:bg-gray-100 focus:outline-none"
                onClick={() => toggleItem(index)}
              >
                <span className="text-black">{item.question}</span>
                {activeIndex === index ? (
                  <FaChevronUp className="text-gray-500" />
                ) : (
                  <FaChevronDown className="text-gray-500" />
                )}
              </button>
              {activeIndex === index && (
                <div className="bg-white px-6 py-4 text-black">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
