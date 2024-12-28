import { Typography } from "@mui/material";
import { MotionDiv } from "./MotionComponents";

export default function Title({ hasScrolled }: { hasScrolled: boolean }) {
  const isMobile = window.innerWidth < 600;
  return (
    <MotionDiv
      layoutId="title"
      layout={true}
      animate={{
        y: hasScrolled ? -300 : 0,
        opacity: hasScrolled ? 0 : 1,
        height: hasScrolled ? "0%" : "100%",
        paddingTop: hasScrolled ? 0 : isMobile ? 100 : 0,
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
        variant={window.innerWidth > 600 ? "h1" : "h4"}
        fontFamily="Milau"
      >
        Hummus Cult
      </Typography>
    </MotionDiv>
  );
}
