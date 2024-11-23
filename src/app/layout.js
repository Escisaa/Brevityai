"use client";

import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { Provider } from "react-redux";
import { store } from "./services/store";

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </Provider>
  );
}

// Add PropTypes validation for children
RootLayout.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children is a required node (can be anything renderable in JSX)
};
