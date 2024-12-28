import { Link, Stack, Typography } from "@mui/material";
import cult from "../../images/hummus-cult/cult.png";
import { useState, useEffect } from "react";

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
      <Stack
        width={isMobile ? "80%" : "45%"}
        height="100%"
        justifyItems="center"
        alignItems="center"
        textAlign="center"
        gap={8}
        style={{
          paddingBottom: "100px",
        }}
      >
        <Stack>
          <Typography
            fontFamily="var(--font-milau)"
            variant={isMobile ? "h3" : "h1"}
          >
            Join the Cult
          </Typography>
          <Typography
            fontFamily="var(--font-milau)"
            variant={isMobile ? "body1" : "h5"}
            style={{
              color: "#FF6633",
            }}
          >
            You're either in... or you're out
          </Typography>
        </Stack>
        <CultForm isMobile={isMobile} />
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
        <Typography
          fontFamily="var(--font-milau)"
          style={{ fontSize: isMobile ? "10px" : "12px" }}
        >
          *Due to massive popularity and following we are currently
          oversubscribed in every region that we operate.
        </Typography>
      </Stack>
    </>
  );
}

function CultForm({ isMobile }: { isMobile: boolean }) {
  return (
    <Stack gap={2}>
      <Typography
        fontFamily="var(--font-milau)"
        variant={isMobile ? "body1" : "h5"}
      >
        Join the{" "}
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
