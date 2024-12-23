import {
  Box,
  Button,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import { Tab, Tabs } from "@mui/material";
import lemonBuddha from "../images/hummus-cult/lemon-buddha.jpeg";
import garlicJesus from "../images/hummus-cult/garlic-jesus.jpeg";
import founders from "../images/hummus-cult/founders.png";
import React, { ReactElement, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Layout from "./components/Layout";
import Banner from "./components/Banner";
import { MotionDiv, MotionImage, MotionP } from "./components/MotionComponents";
import MaximizingSection from "./components/MaximizingSection";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const HummusCultPage = () => {
  return (
    <Stack gap={5} maxWidth="900px" justifySelf="center">
      <OurFlavoursSection />
      <OurMission />
    </Stack>
  );
};

function OurMission() {
  const [currTab, setCurrTab] = useState(0);
  const handleChange = (_event, newValue: number) => {
    setCurrTab(newValue);
  };
  return (
    <Stack
      id="our-mission"
      display="flex"
      alignItems="center"
      marginX="120px"
      gap={2}
    >
      <Banner title="Mission" color="black" />
      <Stack maxWidth="100%">
        <img src={founders.src} />
      </Stack>
    </Stack>
  );
}

function TabItem({
  title,
  isActive,
  onClick,
  id,
}: {
  title: string;
  isActive: boolean;
  onClick: (newValue: string) => void;
  id: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(id)}
      style={{
        color: isActive ? "black" : "grey",
      }}
    >
      {title}
    </Button>
  );
}

function OurFlavoursSection() {
  const itemData = {
    lemonBuddha: [lemonBuddha],
    garlicJesus: [garlicJesus],
  };
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
      height="450px"
    >
      <Banner title="Flavours" color="black" />
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
            maxWidth: "300px",
            position: "absolute",
          }}
          initial={{
            x: "0%",
            opacity: 0,
          }}
          animate={{
            x: currTab === "lemonBuddha" ? "0%" : "-100%",
            transition: { duration: 0.5, ease: "easeInOut" },
            opacity: currTab === "lemonBuddha" ? 1 : 0,
          }}
          src={lemonBuddha.src}
          alt="img"
          loading="lazy"
        />
        <MotionImage
          style={{
            maxWidth: "300px",
            position: "absolute",
          }}
          initial={{
            x: "-100%",
            opacity: 0,
          }}
          animate={{
            x: currTab === "garlicJesus" ? "0%" : "100%",
            opacity: currTab === "garlicJesus" ? 1 : 0,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          src={garlicJesus.src}
          alt="img"
          loading="lazy"
        />
      </Stack>
    </Stack>
  );
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <Stack
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </Stack>
  );
}

function ImageListComponent({
  isActive,
  items,
}: {
  isActive: boolean;
  items: Array<StaticImageData>;
}) {
  return (
    <ImageList variant="" cols={1} gap={8}>
      {items.map((item) => (
        <ImageListItem key={item.src}>
          <MotionImage width={300} src={item.src} alt="img" loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

HummusCultPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default HummusCultPage;
