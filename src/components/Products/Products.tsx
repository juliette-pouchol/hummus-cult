import { Stack, Typography } from "@mui/material";
import { MotionDiv, MotionImage, MotionP } from "../MotionComponents";
import styles from "./Products.module.css";
import lemonBuddha from "../../../images/hummus-cult/lemon-buddha.png";
import lemon from "../../../images/hummus-cult/lemon.png";
import garlicJesus from "../../../images/hummus-cult/garlic-jesus.png";
import garlic from "../../../images/hummus-cult/garlic.png";
import { useState, useEffect } from "react";

export default function Products({ hasClicked }: { hasClicked: boolean }) {
  const [isMobile, setIsMobile] = useState(false);
  const [positions, setPositions] = useState({
    jesusImageX: 0,
    jesusImageY: 0,
    buddhaImageX: 0,
    buddhaImageY: 0,
  });

  useEffect(() => {
    const isMobileCheck = window.innerWidth < 600;
    setIsMobile(isMobileCheck);

    const middleOfScreen = window.innerWidth / 2;
    setPositions({
      jesusImageX: isMobileCheck ? middleOfScreen / 2 - 120 : -150,
      jesusImageY: isMobileCheck ? 250 : 280,
      buddhaImageX: isMobileCheck ? middleOfScreen / 2 - 70 : 170,
      buddhaImageY: isMobileCheck ? 230 : 100,
    });
  }, []);

  return (
    <MotionDiv
      style={{
        justifyContent: isMobile ? "flex-start" : "center",
        alignItems: isMobile ? "flex-start" : "center",
        display: "flex",
        flexDirection: "column",
        paddingTop: 100,
        minHeight: isMobile ? "500px" : "800px",
        paddingBottom: hasClicked ? 10 : 0,
      }}
    >
      <MotionP
        style={{
          fontFamily: "var(--font-milau)",
          fontSize: isMobile ? "20px" : "40px",
          fontWeight: "bold",
          textDecoration: "underline",
          position: "relative",
          margin: 0,
        }}
        animate={{
          opacity: hasClicked ? 1 : 0,
          y: hasClicked ? 0 : -20,
          height: hasClicked ? "auto" : 0,
          marginBottom: hasClicked ? "1.5em" : 0,
          pointerEvents: hasClicked ? "auto" : "none",
        }}
        initial={{
          opacity: 0,
          y: -20,
          height: 0,
          marginBottom: 0,
        }}
        layout={"position"}
        transition={{
          duration: 0.6,
          type: "tween",
          ease: "easeOut",
        }}
      >
        Two dank flavours
      </MotionP>
      <Stack
        id="our-flavours"
        direction={isMobile ? "column" : "row"}
        justifyContent="center"
        alignItems="center"
        spacing={isMobile ? 2 : 10}
        width="100%"
        display="flex"
        position="relative"
      >
        {" "}
        <MotionDiv
          layout={true}
          layoutId="buddha"
          style={{
            position: hasClicked ? "relative" : "absolute",
            paddingBottom: isMobile ? 100 : 0,
          }}
          animate={{
            x: hasClicked ? 0 : positions.buddhaImageX,
            y: hasClicked ? 0 : positions.buddhaImageY,
          }}
          initial={{
            x: positions.buddhaImageX,
            y: positions.buddhaImageY,
          }}
          transition={{
            x: {
              type: "tween",
              duration: 1,
              ease: "easeInOut",
            },
            y: {
              type: "tween",
              duration: 1,
              ease: "easeInOut",
            },
            layout: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
          className={styles.cultImage}
        >
          <Stack
            gap={isMobile ? 1 : 2}
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <MotionImage
              layout="position"
              className={styles.cultImage}
              src={lemonBuddha.src}
            />
            <MotionDiv
              animate={{
                opacity: hasClicked ? 1 : 0,
              }}
              initial={{ opacity: 0 }}
              transition={{
                duration: 1,
                type: "tween",
                ease: "easeInOut",
              }}
              style={{
                backgroundImage: `url(${lemon.src})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                padding: "20px",
                borderRadius: "8px",
                height: isMobile ? "150px" : undefined,
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                fontFamily="var(--font-milau)"
                variant={isMobile ? "h5" : "h4"}
              >
                Lemon Buddha
              </Typography>
              {!isMobile && <br />}
              <Typography
                fontFamily="var(--font-milau)"
                variant={isMobile ? "body2" : "h5"}
                fontSize={isMobile ? "10px" : undefined}
              >
                Lemon and turmeric to enlighten the mind.
                {<br />}
                {!isMobile && <br />}
                Ingredients: garbanzo beans, olive oil, lemon...
              </Typography>
            </MotionDiv>
          </Stack>
        </MotionDiv>
        <MotionDiv
          layout={true}
          layoutId="jesus"
          style={{
            position: hasClicked ? "relative" : "absolute",
          }}
          animate={{
            x: hasClicked ? 0 : positions.jesusImageX,
            y: hasClicked ? 0 : positions.jesusImageY,
          }}
          initial={{
            x: positions.jesusImageX,
            y: positions.jesusImageY,
          }}
          transition={{
            x: {
              type: "tween",
              duration: 1,
              ease: "easeInOut",
            },
            y: {
              type: "tween",
              duration: 1,
              ease: "easeInOut",
            },
            layout: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
          className={styles.cultImage}
        >
          <Stack
            gap={isMobile ? 1 : 2}
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            height={isMobile ? "150px" : undefined}
          >
            <MotionImage
              layout="position"
              className={styles.cultImage}
              src={garlicJesus.src}
            />
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{
                opacity: hasClicked ? 1 : 0,
              }}
              transition={{
                duration: 1,
                type: "tween",
                ease: "easeInOut",
              }}
              style={{
                backgroundImage: `url(${garlic.src})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                padding: "20px",
                borderRadius: "8px",
              }}
            >
              <Typography
                fontFamily="var(--font-milau)"
                variant={isMobile ? "h5" : "h4"}
              >
                Garlic Jesus
              </Typography>
              {!isMobile && <br />}
              <Typography
                fontFamily="var(--font-milau)"
                variant={isMobile ? "body2" : "h5"}
                fontSize={isMobile ? "10px" : undefined}
              >
                Garlic and habanero spice to open the heart.
                {<br />}
                {!isMobile && <br />}
                Ingredients: garbanzo beans, olive oil, garlic...
              </Typography>
            </MotionDiv>
          </Stack>
        </MotionDiv>
      </Stack>
    </MotionDiv>
  );
}
