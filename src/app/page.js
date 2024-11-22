"use client";

import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Video from "./components/video";
import FeatureSection from "./components/featureSection";
import PricingSection from "./components/pricingSection";
import FaqSection from "./components/faqSection"; // Import the FAQ section
import ProblemSection from "./components/ProblemSection";
import Footer from "./components/footer";

function Home() {
  return (
    <div className="relative h-screen w-full bg-white">
      {/* Background with z-0 */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      {/* Content sections with higher z-index */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Video />
        <ProblemSection />
        <FeatureSection />
        <PricingSection />
        <FaqSection /> {/* Add FAQ section here */}
        <Footer />
      </div>
    </div>
  );
}

export default Home;
