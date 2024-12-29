import { Link, Stack, Typography } from "@mui/material";
import cult from "../../../images/hummus-cult/cult.png";
import { useState, useEffect } from "react";
import styles from "./JoinTheCult.module.css";
export default function JoinTheCult() {
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
        <Stack gap={1}>
          <Typography variant="h2">Join the Cult</Typography>
          <Typography
            variant="body2"
            style={{
              color: "#FF6633",
            }}
          >
            You're either in... or you're out
          </Typography>
        </Stack>
        <CultForm />
        <img
          src={cult.src}
          style={{
            height: "400px",
            borderRadius: "20px",
            width: "100%",
            objectFit: "cover",
            backgroundPosition: "center",
          }}
        />
        {isMobile && <br />}
        <Typography style={{ fontSize: isMobile ? "10px" : "12px" }}>
          *Due to massive popularity and following we are currently
          oversubscribed in every region that we operate.
        </Typography>
      </Stack>
    </>
  );
}

function CultForm() {
  return (
    <Stack gap={2}>
      <Typography variant={"body2"}>
        Sign up for the{" "}
        <Link
          style={{ color: "#ABF1D0" }}
          href="https://tinyletter.com/hummus-cult"
        >
          list-serve
        </Link>{" "}
        to receive emails about cult meet-ups and exclusive hummus sales
      </Typography>
    </Stack>
  );
}
