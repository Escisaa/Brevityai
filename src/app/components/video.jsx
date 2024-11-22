"use client"; // Ensures this is a client-side component

import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion

function Video() {
  return (
    <div className="flex items-center justify-center py-20 px-4 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 100 }} // Start lower, off-screen
        whileInView={{ opacity: 1, y: 0 }} // Slide up when in view
        viewport={{ once: true }} // Trigger animation only once
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-5xl w-full" // Made the video container wider
      >
        <video
          src="/video.mp4"
          autoPlay
          loop
          muted
          width="100%"
          height="auto"
          className="border border-gray-200 rounded-lg shadow-xl"
        >
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </div>
  );
}

export default Video;
