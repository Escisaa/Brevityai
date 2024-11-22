"use client";

import React from "react";
import CheckoutButton from "./CheckoutButton";

const PricingSection = () => {
  const PricingItems = [
    {
      title: "Lifetime Access Plan",
      price: "$49",
      description: "Pay once and unlock all features forever.",
      features: [
        "Unlimited summarizations",
        "Advanced AI customizations",
        "Lifetime updates",
        "One-time payment, no recurring fees",
      ],
      priceId: "price_1QLVPYGauJ6Qq52qKoGgxI4f",
    },
    {
      title: "1-Year Access Plan",
      price: "$29",
      description: "Pay annually and access all premium features.",
      features: [
        "Unlimited summarizations",
        "Priority customer support",
        "Access to premium updates",
        "Recurring annual payment",
      ],
      priceId: "price_1QK2qeGauJ6Qq52qRWmQf7LI",
    },
  ];

  return (
    <div id="pricing" className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">Pricing Plans</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {PricingItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-8 bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              {item.title}
            </h3>
            <p className="text-xl font-semibold text-indigo-600 mb-4">
              {item.price}
            </p>
            <p className="text-gray-600 text-center mb-4">{item.description}</p>
            <ul className="text-sm text-gray-600 mb-6">
              {item.features.map((feature, i) => (
                <li key={i} className="mb-2">
                  • {feature}
                </li>
              ))}
            </ul>
            <CheckoutButton priceId={item.priceId} />
            <button
              onClick={() =>
                document
                  .getElementById("hero")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="mt-3 text-blue-600 hover:text-blue-800 underline text-sm"
            >
              Get the Extension
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
