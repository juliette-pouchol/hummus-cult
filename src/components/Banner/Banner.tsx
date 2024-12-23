import { Stack, Typography } from "@mui/material";
import styles from "./Banner.module.css";

export default function Banner({ title }: { title: string }) {
  const TopBars = ({ direction }: { direction: "left" | "right" }) => (
    <Stack
      justifyContent="center"
      alignItems={direction === "left" ? "flex-end" : "flex-start"}
      width="100%"
      display="flex"
      flex={2}
    >
      <div
        className={styles.divider}
        style={{
          width: "25%",
        }}
      />
      <div
        className={styles.divider}
        style={{
          width: "65%",
        }}
      />
      <div className={styles.divider} style={{ width: "100%" }} />
    </Stack>
  );
  const BottomBars = () => (
    <Stack
      justifyContent="center"
      alignItems="center"
      width="100%"
      display="flex"
      flex={2}
    >
      <div
        className={styles.divider}
        style={{
          width: "100%",
        }}
      />
      <div
        className={styles.divider}
        style={{
          width: "65%",
        }}
      />
      <div className={styles.divider} style={{ width: "30%" }} />
    </Stack>
  );

  return (
    <Stack
      display="flex"
      paddingY="12px"
      width="80%"
      justifyContent="center"
      alignItems="center"
      height="100px"
    >
      <Stack width="100%" direction="row" gap={1} display="flex">
        <TopBars direction="left" />
        <Typography flex={0} fontSize="30px">
          Our
        </Typography>
        <TopBars direction="right" />
      </Stack>
      <Typography fontSize="30px">{title}</Typography>
      <BottomBars />
    </Stack>
  );
}
