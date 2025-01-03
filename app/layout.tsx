"use client";

import React from "react";
import clsx from "clsx";

import { LIGHT_TOKENS, DARK_TOKENS } from "../src/constants";
import "./styles.css";
import { useAtom } from "jotai";
import { themeAtom } from "../src/atoms/atoms";
import Header from "../src/components/Header/Header";
import localFont from "next/font/local";

const milau = localFont({
  src: "../public/fonts/MilauDemo.otf",
  variable: "--font-milau",
  display: "swap",
});

function RootLayout({ children }) {
  const [theme, setTheme] = useAtom(themeAtom);

  return (
    <html
      lang="en"
      className={clsx(milau.variable)}
      data-color-theme={theme}
      style={{
        fontFamily: "var(--font-milau)",
        ...((theme === "light"
          ? LIGHT_TOKENS
          : DARK_TOKENS) as React.CSSProperties),
      }}
    >
      <body>
        <Header theme={theme} setTheme={setTheme} className="header" />
        <main>{children}</main>
      </body>
    </html>
  );
}
export default RootLayout;
