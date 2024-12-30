import {
  Link,
  Stack,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import cult from "../../../images/hummus-cult/cult.png";
import { useState, useEffect, useRef } from "react";
import styles from "./JoinTheCult.module.css";

function MembershipCard({
  title,
  description,
  price,
  variant,
}: {
  title: string;
  description: string;
  price: string;
  variant: "outOfStock" | "comingSoon";
}) {
  return (
    <Card className={styles.card}>
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Stack>
          <Typography variant="body1" style={{ fontWeight: "bold" }}>
            {title}
          </Typography>
          <Typography variant="body2">{description}</Typography>
          <Typography variant="body2">{price}</Typography>
        </Stack>
        <Button id={styles.outOfStockButton} variant="contained" disabled>
          {variant === "comingSoon" ? "Coming Soon" : "Out of stock"}
        </Button>
      </CardContent>
    </Card>
  );
}

export default function JoinTheCult() {
  const [isMobile, setIsMobile] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);
  const titleRef = useRef<HTMLDivElement | null>(null);
  console.log(animationStarted);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimationStarted(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <>
      <Stack className={styles.container} gap={isMobile ? 3 : 2}>
        <Stack style={{ alignItems: "center" }} gap={1} ref={titleRef}>
          <Typography variant="h2">Join the Cult *</Typography>
          <Typography
            variant="body2"
            className={animationStarted ? styles.typingAnimation : ""}
            style={{
              color: "#FF6633",
            }}
          >
            You're either in... or you're out
          </Typography>
        </Stack>
        <img
          src={cult.src}
          style={{
            borderRadius: "20px",
            height: "50rem",
            objectFit: "cover",
            backgroundPosition: "center",
          }}
        />
        <CultForm />
        {isMobile && <br />}
      </Stack>
    </>
  );
}

function CultForm() {
  return (
    <Stack className={styles.cultForm} gap={2}>
      <Typography variant="subtitle2" style={{ marginTop: "10px" }}>
        Get a batch of oven-fresh pita chips to go with each hummus order for an
        additional $4 per pound of hummus.
      </Typography>
      <Stack className={styles.cardContainer}>
        <MembershipCard
          title="Hummus Cult Member"
          description="1 lbs hummus per month"
          price="$12/mo"
          variant="outOfStock"
        />
        <MembershipCard
          title="Hummus Worshipper"
          description="2 lbs hummus per month"
          price="$22/mo"
          variant="outOfStock"
        />
        <MembershipCard
          title="Exalted Hummus Lord"
          description="3+ lbs hummus per month"
          price="$10/lb/mo"
          variant="comingSoon"
        />
      </Stack>
      <Typography
        variant="subtitle1"
        fontFamily="gaegu"
        style={{ fontSize: "10px", fontWeight: "bold" }}
      >
        *Due to massive popularity and following we are currently oversubscribed
        in every region that we operate.
      </Typography>
    </Stack>
  );
}
