"use client";
import React from "react";
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
