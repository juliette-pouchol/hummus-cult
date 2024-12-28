"use client";
import { Stack } from "@mui/material";
import { MotionDiv } from "../MotionComponents";
import { Sun, Moon } from "react-feather";
import styles from "./Header.module.css";
import clsx from "clsx";

function NavIconAnimation({
  emoji,
  isEnabled,
}: {
  emoji: string;
  isEnabled: boolean;
}) {
  return isEnabled ? (
    <MotionDiv
      className={styles.animatedIcon}
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 0.3,
      }}
    >
      {emoji}
    </MotionDiv>
  ) : (
    <div className={styles.animatedIcon}>{emoji}</div>
  );
}

export default function Header({
  theme,
  setTheme,
  className,
  ...delegated
}: {
  theme: string;
  setTheme: (theme: string) => void;
  className: string;
}) {
  return (
    <header className={clsx(styles.header, className)} {...delegated}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        height="50px"
      >
        <div className={styles.actions}></div>
      </Stack>
    </header>
  );
}
