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
      height="700px"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
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
            transform: topIsInView ? "rotate(40deg)" : "rotate(0deg)",
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
          padding: "20px",
          borderRadius: "10px",
          width: "120%",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          fontFamily="Milau"
          variant={isMobile ? "h4" : "h2"}
          ref={topRef}
        >
          introducing: <span style={{ color: "#ECA74E" }}>HAAS</span>
        </Typography>
        {!isMobile && <br />}
        <Typography
          fontFamily="Milau"
          variant={isMobile ? "body1" : "h5"}
          ref={topRef}
        >
          (<span style={{ color: "#ECA74E" }}>H</span>ummus{" "}
          <span style={{ color: "#ECA74E" }}>A</span>s{" "}
          <span style={{ color: "#ECA74E" }}>A</span>s{" "}
          <span style={{ color: "#ECA74E" }}>S</span>ervice)
        </Typography>
        <br />
        <img
          src={hummus.src}
          style={{
            width: "200px",
            objectFit: "cover",
            display: "block",
            margin: "0 auto",
          }}
        />
        <br />
        <Stack width={isMobile ? "80%" : "100%"}>
          <Typography fontFamily="Milau" variant={isMobile ? "body2" : "body1"}>
            The next big step forward in hummus innovation.
          </Typography>
          {!isMobile && <br />}
          <Typography
            ref={bottomRef}
            fontFamily="Milau"
            variant={isMobile ? "body2" : "body1"}
          >
            Sign up and have fresh hummus delivered to your door.
          </Typography>
        </Stack>
        <br />
        <br />
        <Typography
          style={{
            lineHeight: isMobile ? "1.6" : "1.2",
          }}
          fontFamily="Milau"
          variant={isMobile ? "h3" : "h4"}
        >
          <span style={{ color: "#ECA74E" }}>Cheap.</span>{" "}
          <span style={{ color: "#FF6633" }}>Nutritious.</span>{" "}
          <span style={{ color: "#ECA74E" }}>Culty.</span>
        </Typography>
        <br />
      </div>
      {!isMobile && (
        <MotionDiv
          ref={bottomRef}
          style={{
            position: "absolute",
          }}
          animate={{
            top: bottomIsInView ? "20%" : "0%",
            left: bottomIsInView ? "30%" : "0%",
            width: bottomIsInView ? "100%" : "0%",
            height: bottomIsInView ? "80%" : "0%",
            border: bottomIsInView ? "5px solid #ECA74E" : "0px solid #ECA74E",
            borderColor: bottomIsInView
              ? "transparent #FF6633 #FF6633 transparent"
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
            borderColor: "#ECA74E transparent transparent #ECA74E ",
            borderRadius: "50%",
            transform: "rotate(40deg)",
            transformOrigin: "center",
            rotate: "-45deg",
          }}
        />
      )}
    </Stack>
  );
}
