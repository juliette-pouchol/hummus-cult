"use client";

import { Stack } from "@mui/material";
import React, { useState } from "react";
import JoinTheCult from "../../src/components/JoinTheCult";
import Products from "../../src/components/Products/Products";
import HaasSection from "../../src/components/HaasSection";
import Title from "../../src/components/Title";

const HummusCultPage = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const isMobile = window.innerWidth < 600;

  React.useEffect(() => {
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
        paddingTop={hasScrolled ? 2 : 10}
        alignItems="center"
        gap={isMobile ? 5 : 30}
      >
        <Products hasClicked={hasScrolled} />
        <HaasSection />
        <JoinTheCult />
      </Stack>
    </>
  );
};

export default HummusCultPage;
