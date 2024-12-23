"use client";
import { Stack } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
      className="animated-slide"
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 0.3,
      }}
    >
      {emoji}
    </MotionDiv>
  ) : (
    <div>{emoji}</div>
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
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Navigation />
        <div className={styles.actions}>
          <button
            className={styles.action}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <Sun size="1.5rem" /> : <Moon size="1.5rem" />}
          </button>
        </div>
      </Stack>
    </header>
  );
}

function Navigation() {
  const pathname = usePathname();

  return (
    <Stack display="flex" direction="row" gap={2}>
      <Link
        className={styles.link}
        href="/"
        style={{
          color: getTabTextColor(pathname, "/"),
        }}
      >
        <Stack direction="row" gap={1}>
          Playground
          <NavIconAnimation emoji="🛝" isEnabled={pathname === "/"} />
        </Stack>
      </Link>
      <Link
        className={styles.link}
        href="/hummus-cult"
        style={{
          color: getTabTextColor(pathname, "/hummus-cult"),
        }}
      >
        <Stack direction="row" gap={1}>
          Hummus Cult
          <NavIconAnimation
            emoji="🧆"
            isEnabled={pathname === "/hummus-cult"}
          />
        </Stack>
      </Link>
      <Link
        className={styles.link}
        href="/glory-hats"
        style={{
          color: getTabTextColor(pathname, "/glory-hats"),
        }}
      >
        <Stack direction="row" gap={1}>
          Glory Hats
          <NavIconAnimation emoji="👒" isEnabled={pathname === "/glory-hats"} />
        </Stack>
      </Link>
    </Stack>
  );
}

function getTabTextColor(currentPage: string, tabName: string) {
  return currentPage === tabName
    ? "var(--color-secondary)"
    : "var(--color-text)";
}
