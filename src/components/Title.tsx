import { Typography } from "@mui/material";
import { MotionDiv } from "./MotionComponents";
import { useState, useEffect } from "react";

export default function Title({ hasScrolled }: { hasScrolled: boolean }) {
  const [fontSize, setFontSize] = useState<"h1" | "h4">("h1");

  useEffect(() => {
    setFontSize(window.innerWidth > 600 ? "h1" : "h4");
  }, []);

  return (
    <MotionDiv
      layoutId="title"
      layout={true}
      animate={{
        y: hasScrolled ? -300 : 0,
        opacity: hasScrolled ? 0 : 1,
        height: hasScrolled ? "0%" : "100%",
      }}
      initial={{ opacity: 1, width: "100%" }}
      transition={{
        duration: 1,
        layout: {
          duration: 1,
          ease: "easeInOut",
        },
      }}
    >
      <Typography
        textAlign="center"
        variant={fontSize}
        fontFamily="var(--font-milau)"
      >
        Hummus Cult
      </Typography>
    </MotionDiv>
  );
}
