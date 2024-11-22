import React from "react";
import Image from "next/image";

const NavSection = () => {
  const handleLogout = () => {
    window.close(); // Close the extension popup
  };

  return (
    <nav className="bg-white/70 backdrop-blur-md p-4 sticky top-0 w-full z-50">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <div className="flex items-center cursor-pointer">
          <Image
            src="/assets/Icon.png"
            alt="Logo"
            width={40}
            height={40}
            className="object-contain mr-2"
          />
          <span className="text-xl font-semibold text-gray-800">BrevityAI</span>
        </div>
        <button
          onClick={handleLogout}
          className="bg-slate-950 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
        >
          Close
        </button>
      </div>
    </nav>
  );
};

export default NavSection;
