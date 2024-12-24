"use client";

import React, { useState } from "react";
import { Work_Sans, Spline_Sans_Mono } from "next/font/google";
import clsx from "clsx";

import { LIGHT_TOKENS, DARK_TOKENS } from "../src/constants";

import Header from "../src/components/Header/Header";
import "./styles.css";
import { useAtom } from "jotai";
import { themeAtom } from "./atoms/atoms";

const mainFont = Work_Sans({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--font-family",
});
const monoFont = Spline_Sans_Mono({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--font-family-mono",
});

function RootLayout({ children }) {
  const [theme, setTheme] = useAtom(themeAtom);

  return (
    <html
      lang="en"
      className={clsx(mainFont.variable, monoFont.variable)}
      data-color-theme={theme}
      style={
        theme === "light"
          ? (LIGHT_TOKENS as React.CSSProperties)
          : (DARK_TOKENS as React.CSSProperties)
      }
    >
      <body>
        <Header className="header" theme={theme} setTheme={setTheme} />
        <main>{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
