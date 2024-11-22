"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="bg-white/70 backdrop-blur-md p-4 sticky top-0 w-full z-50">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <motion.div
          className="flex items-center cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Image
            src="/Icon.png"
            alt="BrevityAI Logo"
            width={40}
            height={40}
            className="object-contain mr-2"
          />
          <button className="text-xl font-semibold text-gray-800">
            BrevityAI
          </button>
        </motion.div>

        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a
            href="#features"
            className="hover:text-blue-600 transition duration-300"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="hover:text-blue-600 transition duration-300"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="hover:text-blue-600 transition duration-300"
          >
            FAQ
          </a>
        </div>

        <div className="flex items-center space-x-3">
          <motion.button
            className="bg-blue-600 text-white py-[7px] px-4 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.location.href = "#pricing"; // Redirects to the pricing section
            }}
          >
            Get the Extension
          </motion.button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
