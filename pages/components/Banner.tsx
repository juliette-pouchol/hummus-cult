import { Stack, Typography } from "@mui/material";

export default function Banner({
  title,
  color,
}: {
  title: string;
  color: string;
}) {
  const TopBars = ({ direction }: { direction: "left" | "right" }) => (
    <Stack
      justifyContent="center"
      alignItems={direction === "left" ? "flex-end" : "flex-start"}
      width="100%"
      display="flex"
      flex={2}
    >
      <div
        style={{
          width: "25%",
          height: "3px",
          backgroundColor: color,
          marginBottom: "3px",
        }}
      />
      <div
        style={{
          width: "65%",
          height: "3px",
          backgroundColor: color,
          marginBottom: "3px",
        }}
      />
      <div style={{ width: "100%", height: "3px", backgroundColor: color }} />
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
        style={{
          width: "100%",
          height: "3px",
          backgroundColor: color,
          marginBottom: "3px",
        }}
      />
      <div
        style={{
          width: "65%",
          height: "3px",
          backgroundColor: color,
          marginBottom: "3px",
        }}
      />
      <div style={{ width: "30%", height: "3px", backgroundColor: color }} />
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
