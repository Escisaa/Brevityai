"use client";

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbBrandX } from "react-icons/tb"; // Import the X (Twitter) icon

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">BrevityAI</h2>
            <p className="text-gray-400">
              Simplifying content, saving your time, and boosting productivity.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-2 text-center md:text-left">
            <a href="#features" className="block hover:text-blue-400">
              Features
            </a>
            <a href="#pricing" className="block hover:text-blue-400">
              Pricing
            </a>
            <a href="#faq" className="block hover:text-blue-400">
              FAQ
            </a>
            <a href="#contact" className="block hover:text-blue-400">
              Contact Us
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="https://x.com/IsaacMkase"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <TbBrandX size={24} />
            </a>
            <a
              href="https://linkedin.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
          <p>
            &copy; {new Date().getFullYear()} BrevityAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
