import { Typography } from "@mui/material";
import { MotionDiv } from "../components/MotionComponents";
import styles from "./Title.module.css";

export default function Title({ hasScrolled }: { hasScrolled: boolean }) {
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
        duration: 0.5,
        layout: {
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
    >
      <Typography className={styles.title} variant={"h1"}>
        Hummus Cult
      </Typography>
    </MotionDiv>
  );
}
