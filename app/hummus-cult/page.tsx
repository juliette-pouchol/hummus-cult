"use client";
import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { MotionDiv, MotionImage } from "../../src/components/MotionComponents";
import lemon from "../../images/hummus-cult/lemon.png";
import garlic from "../../images/hummus-cult/garlic.png";
import lemonBuddha from "../../images/hummus-cult/lemon-buddha.png";
import garlicJesus from "../../images/hummus-cult/garlic-jesus.png";

const HummusCultPage = () => {
  return (
    <Stack
      backgroundColor="white"
      width="100%"
      minHeight="300vh"
      marginTop="-80px"
      paddingTop="calc(64px + 2.5rem)"
      paddingBottom={10}
      gap={5}
      alignItems="center"
      sx={{ position: "relative", zIndex: 0 }}
    >
      <Typography variant="h1" fontFamily="Milau">
        Hummus Cult
      </Typography>
      <ImagesSection />
    </Stack>
  );
};

function ImagesSection() {
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate positions based on scroll
  const maxScroll = 300; // Point at which images reach final position
  const progressX = Math.min(scrollY / maxScroll, 1.5);
  const progressY = Math.min(scrollY / maxScroll, 3);
  // Initial and final positions
  const leftImageStartX = -50;
  const leftImageEndX = 90;
  const leftImageStartY = 180;
  const leftImageEndY = 200; // Lower position

  const rightImageStartX = 250;
  const rightImageEndX = 70;
  const rightImageStartY = 0;
  const rightImageEndY = 0; // Higher position

  // Calculate current positions
  const leftImageX =
    leftImageStartX + (leftImageEndX - leftImageStartX) * progressX * 2;
  const leftImageY = leftImageStartY + progressY * 320;
  const rightImageX =
    rightImageStartX + (rightImageEndX - rightImageStartX) * progressX * 2;
  const rightImageY = rightImageStartY + progressY * 220;
  const leftImageScale = 1 - progressY * 0.05;
  const rightImageScale = 1 - progressY * 0.05;

  const decorationOpacity = Math.min(0 + progressY * 1.4, 0.3);
  const garlicX = Math.min(0 + progressY * -120, -200);
  const garlicY = Math.min(0 + progressY * 100, 100);
  const lemonX = Math.min(0 + progressY * 150, 400);
  const lemonY = Math.min(0 + progressY * 100, 100);

  return (
    <Stack id="our-flavours" display="flex" alignItems="center" height="600px">
      <MotionDiv
        animate={{
          x: leftImageX,
          y: leftImageY,
          scale: leftImageScale,
        }}
        transition={{
          stiffness: 50,
          damping: 30,
          mass: 2,
        }}
        style={{
          width: "600px",
          position: "absolute",
        }}
      >
        <Stack direction="row" gap={2}>
          <MotionImage
            animate={{
              opacity: decorationOpacity,
              x: garlicX,
              y: garlicY,
              width: "600px",
            }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
            src={garlic.src}
          />
          <MotionImage
            style={{ position: "absolute", width: "500px" }}
            src={garlicJesus.src}
          />
        </Stack>
      </MotionDiv>
      <MotionDiv
        animate={{
          x: rightImageX,
          y: rightImageY,
          scale: rightImageScale,
        }}
        transition={{
          stiffness: 50,
          damping: 30,
          mass: 2,
        }}
        style={{
          width: "600px",
          position: "absolute",
        }}
      >
        <Stack direction="row" gap={2}>
          <MotionImage
            style={{ width: "500px" }}
            src={lemon.src}
            initial={{ opacity: 0 }}
            animate={{ opacity: decorationOpacity, x: lemonX, y: lemonY }}
            transition={{ duration: 1 }}
          />
          <MotionImage
            style={{ position: "absolute", width: "500px" }}
            src={lemonBuddha.src}
          />
        </Stack>
      </MotionDiv>
    </Stack>
  );
}

export default HummusCultPage;
