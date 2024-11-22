"use client";
import React from "react";
import { FiXCircle } from "react-icons/fi";
import Link from "next/link";
const CancelPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900">
      <div className="text-center p-8 bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="flex justify-center text-red-600 mb-4">
          <FiXCircle size={50} /> {/* Adding the X icon */}
        </div>
        <h1 className="text-3xl font-semibold text-red-600">
          Payment Cancelled
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          The payment process has been Cancelled. Please try again if needed.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block bg-black text-white py-2 px-6 rounded-md hover:bg-slate-800 transition duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default CancelPage;
