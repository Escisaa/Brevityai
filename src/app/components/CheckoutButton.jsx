"use client";

import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const CheckoutButton = ({ priceId }) => {
  const handleCheckout = async () => {
    const stripe = await stripePromise;

    // Call backend to create the checkout session
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ priceId }),
    });

    const session = await res.json();

    // Redirect to Stripe Checkout
    const { error } = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <button
      className="py-2 w-[400px] hover:bg-blue-700 duration-300 rounded-md bg-blue-500 text-white"
      onClick={handleCheckout}
    >
      Checkout
    </button>
  );
};

export default CheckoutButton;
