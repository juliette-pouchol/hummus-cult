import { Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import styles from "./OurStory.module.css";
import founders from "../../../images/hummus-cult/founders.png";

export default function OurStory() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Stack className={styles.container} gap={isMobile ? 3 : 10}>
        <Stack gap={3}>
          <Typography variant="h2" style={{ textAlign: "center" }}>
            Our Story
          </Typography>
          <img
            src={founders.src}
            style={{
              height: "400px",
              borderRadius: "20px",
              width: "100%",
              objectFit: "cover",
              backgroundPosition: "center",
            }}
          />
          <Typography variant="body2" align="justify">
            We're on a mission to make the best dang hummus in San Francisco,
            and become enlightened in the process.
            <br />
            <br />
            Big Hummus is ripping you off. They water down your hummus and use
            cheap seed oils. And where's the flavor imagination? What if we made
            hummus a sacred food...?
            <br />
            <br />
            Hummus lasts forever, is good combined with most other foods, is a
            healthy snack, and is super cheap. Don't just take our word for it -
            Juj's coworker said hummus has the very best calorie-per-$ ratio out
            there, so it's official.
          </Typography>
        </Stack>
      </Stack>
    </>
  );
}
