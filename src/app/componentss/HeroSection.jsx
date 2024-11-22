import React from "react";

const HeroSection = () => {
  return (
    <header className="w-full flex flex-col items-center pt-4">
      <h1 className="head_text text-center mt-16 text-6xl font-extrabold">
        What do you want to summarize?
      </h1>

      <h2 className="mt-4 text-md text-gray-700 text-center max-w-2xl px-4">
        Paste your link or text, and let AI summarize it for you.
      </h2>
    </header>
  );
};

export default HeroSection;
