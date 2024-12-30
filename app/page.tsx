"use client";

import { Stack } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Products from "../src/components/Products/Products";
import HaasSection from "../src/components/HaasSection";
import Title from "../src/Title/Title";
import JoinTheCult from "../src/components/JoinTheCult/JoinTheCult";
import MovingPictures from "../src/components/Products/MovingPictures";
import OurStory from "../src/components/OurStory/OurStory";
import FAQs from "../src/components/FAQs/FAQs";
import { MotionDiv } from "../src/components/MotionComponents";

const App = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
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

  const [hasScrolledPast, setHasScrolledPast] = useState(false);

  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (topRef.current) {
        const rect = topRef.current.getBoundingClientRect();
        const isPast = rect.top < 0;
        setHasScrolledPast(isPast);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isInView = hasScrolledPast;

  return (
    <MotionDiv
      animate={{ opacity: 1 }}
      transition={{
        duration: 2,
      }}
      initial={{ opacity: 0 }}
    >
      <Title hasScrolled={hasScrolled} />
      <Stack
        width="100%"
        height="100%"
        paddingTop={hasScrolled ? 2 : 0}
        alignItems="center"
        gap={isMobile ? 5 : 10}
      >
        <MovingPictures hasClicked={hasScrolled} />
        <HaasSection topRef={topRef} />
        <Products isInView={isInView} />
        <JoinTheCult />
        <OurStory />
        <FAQs />
      </Stack>
    </MotionDiv>
  );
};

export default App;
