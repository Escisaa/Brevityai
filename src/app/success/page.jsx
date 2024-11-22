"use client";

import React from "react";
import { useEffect, useState } from "react";
import {
  FaCheckCircle,
  FaSpinner,
  FaExclamationTriangle,
} from "react-icons/fa";
import { useRouter, useSearchParams } from "next/navigation";

const MAX_RETRIES = 3;
const RETRY_DELAY = 2000;

const SuccessPage = () => {
  const [paymentStatus, setPaymentStatus] = useState("loading");
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    let timeoutId;

    const checkPaymentStatus = async () => {
      try {
        const session_id = searchParams.get("session_id");

        if (!session_id) {
          setError("Payment session not found");
          setPaymentStatus("error");
          timeoutId = setTimeout(() => {
            router.push("/cancel");
          }, 3000);
          return;
        }

        // Add a small initial delay
        if (retryCount === 0) {
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }

        const response = await fetch(
          `/api/getsession?session_id=${encodeURIComponent(session_id)}`
        );

        if (!response.ok) {
          throw new Error(`Payment verification failed (${response.status})`);
        }

        const data = await response.json();
        console.log("Payment status check attempt", retryCount + 1, ":", data);

        if (data.status === "paid") {
          setPaymentStatus("success");
          // Optional: Store success status in localStorage
          localStorage.setItem("payment_success", "true");
        } else if (data.status === "pending" && retryCount < MAX_RETRIES) {
          setRetryCount((prev) => prev + 1);
          timeoutId = setTimeout(checkPaymentStatus, RETRY_DELAY);
        } else if (data.status === "failed") {
          throw new Error("Payment failed or was cancelled");
        } else {
          throw new Error("Payment not completed");
        }
      } catch (error) {
        console.error("Error checking payment:", error);
        setError(error.message || "Payment verification failed");
        setPaymentStatus("error");
        timeoutId = setTimeout(() => {
          router.push("/cancel");
        }, 3000);
      }
    };

    checkPaymentStatus();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [router, searchParams, retryCount]);

  const handleExtensionRedirect = () => {
    setIsRedirecting(true);
    // Save completion status before redirect
    localStorage.setItem("payment_completed", "true");
    window.location.href =
      "https://chrome.google.com/webstore/your-extension-link";
  };

  if (paymentStatus === "loading") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full mx-4">
          <div className="flex justify-center mb-4">
            <FaSpinner className="animate-spin text-blue-500 h-12 w-12" />
          </div>
          <h1 className="text-xl font-semibold text-gray-800 mb-2">
            Confirming your payment...
          </h1>
          {retryCount > 0 && (
            <p className="text-sm text-gray-500">
              Still checking... Attempt {retryCount + 1} of {MAX_RETRIES + 1}
            </p>
          )}
        </div>
      </div>
    );
  }

  if (paymentStatus === "error") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full mx-4">
          <div className="flex justify-center mb-4">
            <FaExclamationTriangle className="text-red-500 h-12 w-12" />
          </div>
          <h1 className="text-xl font-semibold text-red-600 mb-4">
            Payment Error
          </h1>
          <p className="text-gray-600 mb-4">{error}</p>
          <p className="text-sm text-gray-500">Redirecting to home page...</p>
        </div>
      </div>
    );
  }

  if (paymentStatus === "success") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full mx-4">
          <div className="flex justify-center mb-4">
            <FaCheckCircle className="text-green-500 h-12 w-12" />
          </div>
          <h1 className="text-2xl font-semibold text-green-600 mb-4">
            Payment Successful!
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Thank you for your purchase! You can now install the extension.
          </p>
          <button
            onClick={handleExtensionRedirect}
            className="w-full py-3 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-700 
                     transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isRedirecting}
          >
            {isRedirecting ? "Redirecting..." : "Get the Extension"}
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default SuccessPage;
