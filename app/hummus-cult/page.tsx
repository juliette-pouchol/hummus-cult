"use client";
import { Stack } from "@mui/material";
import React, { useState } from "react";
import founders from "/public/images/hummus-cult/founders.png";
import lemonBuddha from "/public/images/hummus-cult/lemon-buddha.png";
import garlicJesus from "/public/images/hummus-cult/garlic-jesus.png";
import Banner from "../../src/components/Banner/Banner";
import { MotionImage } from "../../src/components/MotionComponents";
import TabItem from "../../src/components/TabItem";

const HummusCultPage = () => {
  return (
    <Stack gap={5} maxWidth="900px" justifySelf="center">
      <OurFlavoursSection />
      <OurMission />
    </Stack>
  );
};

function OurMission() {
  return (
    <Stack
      id="our-mission"
      display="flex"
      alignItems="center"
      marginX="120px"
      gap={2}
    >
      <Banner title="Mission" />
      <Stack maxWidth="100%">
        <img src={founders.src} />
      </Stack>
    </Stack>
  );
}

function OurFlavoursSection() {
  const [currTab, setCurrTab] = useState("lemonBuddha");
  const handleChange = (newValue: string) => {
    setCurrTab(newValue);
  };
  return (
    <Stack
      id="our-flavours"
      display="flex"
      alignItems="center"
      marginX="120px"
      height="600px"
    >
      <Banner title="Flavours" />
      <Stack direction="row" gap={2}>
        <TabItem
          title="Lemon Buddha"
          isActive={currTab === "lemonBuddha"}
          onClick={handleChange}
          id="lemonBuddha"
        />
        <TabItem
          title="Garlic Jesus"
          isActive={currTab === "garlicJesus"}
          onClick={handleChange}
          id="garlicJesus"
        />
      </Stack>
      <Stack
        direction="row"
        gap={2}
        display="flex"
        justifyContent="center"
        position="relative"
        width="100%"
      >
        <MotionImage
          style={{
            maxWidth: "390px",
            position: "absolute",
            overflow: "hidden",
          }}
          initial={{
            x: "0%",
            opacity: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: currTab === "lemonBuddha" ? 0.1 : 0,
          }}
          animate={{
            x: currTab === "lemonBuddha" ? "0%" : "-100%",
            opacity: currTab === "lemonBuddha" ? 1 : 0,
            display: currTab === "lemonBuddha" ? "block" : "none",
          }}
          src={lemonBuddha.src}
          alt="img"
        />
        <MotionImage
          style={{
            maxWidth: "390px",
            position: "absolute",
          }}
          initial={{
            x: "100%",
            opacity: 0,
            display: "none",
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: currTab === "garlicJesus" ? 0.1 : 0,
          }}
          animate={{
            x: currTab === "garlicJesus" ? "0%" : "100%",
            opacity: currTab === "garlicJesus" ? 1 : 0,
            display: currTab === "garlicJesus" ? "block" : "none",
          }}
          src={garlicJesus.src}
          alt="img"
        />
      </Stack>
    </Stack>
  );
}

export default HummusCultPage;
