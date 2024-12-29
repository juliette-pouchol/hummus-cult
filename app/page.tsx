"use client";

import { Stack } from "@mui/material";
import React, { useState } from "react";
import Products from "../src/components/Products/Products";
import HaasSection from "../src/components/HaasSection";
import Title from "../src/Title/Title";
import JoinTheCult from "../src/components/JoinTheCult/JoinTheCult";
import MovingPictures from "../src/components/Products/MovingPictures";

const App = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    setIsMobile(window.innerWidth < 600);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50 && !hasScrolled) {
        setHasScrolled(true);
      } else if (scrollPosition <= 50 && hasScrolled) {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);
  return (
    <>
      <Title hasScrolled={hasScrolled} />
      <Stack
        width="100%"
        height="100%"
        paddingTop={hasScrolled ? 2 : 0}
        alignItems="center"
        gap={isMobile ? 5 : 10}
      >
        <MovingPictures hasClicked={hasScrolled} />
        <HaasSection />
        <Products hasClicked={hasScrolled} />
        <JoinTheCult />
      </Stack>
    </>
  );
};

export default App;
