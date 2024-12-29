import { Stack, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/material";
import hummus from "../../images/hummus-cult/hummus.jpeg";
import { MotionDiv } from "./MotionComponents";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function HaasSection() {
  const [isMobile, setIsMobile] = useState(false);
  const bottomRef = useRef(null);
  const topRef = useRef(null);
  const bottomIsInView = useInView(bottomRef);
  const topIsInView = useInView(topRef);

  useEffect(() => {
    setIsMobile(window.innerWidth < 600);
  }, []);

  return (
    <Stack
      width={isMobile ? "80%" : "45%"}
      height={isMobile ? "400px" : "600px"}
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      paddingTop={isMobile ? "7rem" : "30rem"}
      paddingBottom={isMobile ? "4rem" : undefined}
      gap={10}
      position="relative"
      ref={topRef}
    >
      {!isMobile && (
        <MotionDiv
          transition={{
            duration: 1,
            type: "spring",
            bounce: 0.5,
            damping: 10,
            stiffness: 100,
            opacity: { duration: 0.5 },
          }}
          layout={true}
          animate={{
            top: topIsInView ? "-20%" : "0%",
            left: topIsInView ? "-30%" : "0%",
            width: topIsInView ? "80%" : "0%",
            height: topIsInView ? "100%" : "0%",
            border: topIsInView ? "5px solid #ECA74E" : "0px solid #ECA74E",
            borderColor: topIsInView
              ? "#ECA74E transparent transparent #ECA74E "
              : "transparent transparent transparent transparent",
            borderRadius: topIsInView ? "50%" : "0%",
            transform: topIsInView ? "rotate(10deg)" : "rotate(0deg)",
            transformOrigin: topIsInView ? "center" : "center",
            rotate: topIsInView ? "-45deg" : "0deg",
            opacity: topIsInView ? 1 : 0,
          }}
          initial={{
            opacity: 0,
            top: "0%",
            left: "0%",
            width: "0%",
            height: "0%",
            border: "5px solid #ECA74E",
            borderColor: "#ECA74E transparent transparent #ECA74E ",
            borderRadius: "50%",
            transform: "rotate(40deg)",
            transformOrigin: "center",
            rotate: "-45deg",
          }}
          style={{
            position: "absolute",
          }}
        />
      )}
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          width: "120%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography fontFamily="var(--font-milau)" variant="h2">
          Introducing: <span style={{ color: "#ECA74E" }}>HAAS</span>
        </Typography>
        <Typography fontFamily="var(--font-milau)" variant="body1">
          (<span style={{ color: "#ECA74E" }}>H</span>ummus{" "}
          <span style={{ color: "#ECA74E" }}>A</span>s{" "}
          <span style={{ color: "#ECA74E" }}>A</span>s{" "}
          <span style={{ color: "#ECA74E" }}>S</span>ervice)
        </Typography>
        <br />
        <Stack width={isMobile ? "80%" : "100%"}>
          <Typography variant={"body2"}>
            The next big step forward in hummus innovation.
          </Typography>
          <Typography variant={"body2"}>
            Sign up and have fresh hummus delivered to your door.
          </Typography>
          <Typography style={{}} variant={isMobile ? "h2" : "h3"}>
            <span style={{ color: "#ECA74E" }}>Cheap.</span>{" "}
            {isMobile && <br />}
            <span style={{ color: "#FF6633" }}>Nutritious.</span>{" "}
            {isMobile && <br />}
            <span style={{ color: "#ECA74E" }}>Culty.</span>
          </Typography>
        </Stack>
        <img
          src={hummus.src}
          style={{
            width: isMobile ? "20rem" : "40rem",
            objectFit: "cover",
            display: "block",
            margin: "0 auto",
          }}
        />
      </div>
      {!isMobile && (
        <MotionDiv
          style={{
            position: "absolute",
          }}
          animate={{
            top: bottomIsInView ? "30%" : "0%",
            left: bottomIsInView ? "40%" : "0%",
            width: bottomIsInView ? "100%" : "0%",
            height: bottomIsInView ? "80%" : "0%",
            border: bottomIsInView ? "5px solid #ECA74E" : "0px solid #ECA74E",
            borderColor: bottomIsInView
              ? "transparent #FF6633 transparent transparent"
              : "transparent transparent transparent transparent",
            borderRadius: bottomIsInView ? "50%" : "0%",
            transform: bottomIsInView ? "rotate(40deg)" : "rotate(0deg)",
            transformOrigin: "center",
            rotate: bottomIsInView ? "-45deg" : "0deg",
            opacity: bottomIsInView ? 1 : 0,
          }}
          transition={{
            duration: 1,
            type: "spring",
            bounce: 0.5,
            damping: 10,
            stiffness: 100,
            opacity: { duration: 0.5 },
          }}
          initial={{
            top: "0%",
            left: "0%",
            width: "0%",
            height: "0%",
            border: "5px solid #ECA74E",
            borderColor: "transparent transparent transparent transparent ",
            borderRadius: "50%",
            transform: "rotate(40deg)",
            transformOrigin: "center",
            rotate: "-45deg",
          }}
        />
      )}
      <div ref={bottomRef} />
    </Stack>
  );
}
