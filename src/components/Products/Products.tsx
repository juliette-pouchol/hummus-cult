import { Stack, Typography } from "@mui/material";
import { MotionDiv, MotionImage, MotionP } from "../MotionComponents";
import styles from "./Products.module.css";
import lemonBuddha from "../../../images/hummus-cult/lemon-buddha.png";
import lemon from "../../../images/hummus-cult/lemon.png";
import garlicJesus from "../../../images/hummus-cult/garlic-jesus.png";
import garlic from "../../../images/hummus-cult/garlic.png";
import { useState, useEffect, useRef } from "react";
import { TWEEN } from "./MovingPictures";
import { useInView } from "framer-motion";

export default function Products({ isInView }: { isInView: boolean }) {
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

    setPositions({
      jesusImageX: window.innerWidth,
      jesusImageY: isMobileCheck ? 380 : 280,
      buddhaImageX: -window.innerWidth,
      buddhaImageY: isMobileCheck ? 250 : 100,
    });
  }, []);

  return (
    <MotionDiv
      className={styles.productsContainer}
      animate={{
        paddingBottom: isInView ? 10 : 0,
      }}
    >
      <MotionDiv
        style={{
          fontFamily: "var(--font-milau)",
          fontSize: isMobile ? "20px" : "40px",
          position: "relative",
          margin: 0,
        }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : -20,
          height: isInView ? "auto" : 0,
          marginBottom: isInView ? "1.5em" : 0,
          pointerEvents: isInView ? "auto" : "none",
        }}
        initial={{
          opacity: 0,
          y: -20,
          height: 0,
          marginBottom: 0,
        }}
        layout={"position"}
        transition={TWEEN}
      >
        <Typography variant="h2">Two dank flavours</Typography>
      </MotionDiv>
      <Stack
        className={styles.productsStack}
        style={{ alignItems: "flex-start" }}
      >
        <Product
          layoutId="buddha"
          image={lemonBuddha.src}
          backgroundImage={lemon.src}
          title="Lemon Buddha"
          description="Lemon and turmeric to enlighten the mind."
          ingredients="garbanzo beans, olive oil, lemon juice, garlic, sea salt, herbs, spices."
          isInView={isInView}
          isMobile={isMobile}
          positions={{
            x: positions.buddhaImageX,
            y: positions.buddhaImageY,
          }}
        />
        <Product
          layoutId="jesus"
          image={garlicJesus.src}
          backgroundImage={garlic.src}
          title="Garlic Jesus"
          description="Garlic and habanero spice to open the heart."
          ingredients="garbanzo beans, olive oil, lemon juice, garlic, balsamic vinegar, sea salt, red chile pepper, habanero pepper, spices."
          isInView={isInView}
          isMobile={isMobile}
          positions={{ x: positions.jesusImageX, y: positions.jesusImageY }}
        />
      </Stack>
    </MotionDiv>
  );
}

function Product({
  image,
  backgroundImage,
  title,
  description,
  ingredients,
  isInView,
  isMobile,
  positions,
  layoutId,
}: {
  layoutId: string;
  image: string;
  backgroundImage: string;
  title: string;
  description: string;
  ingredients: string;
  isInView: boolean;
  isMobile: boolean;
  positions: {
    x: number;
    y: number;
  };
}) {
  return (
    <MotionDiv
      className={styles.cultImage}
      layout={true}
      layoutId={layoutId}
      style={{
        position: isInView ? "relative" : "absolute",
      }}
      animate={{
        x: isInView ? 0 : positions.x,
        y: isInView ? 0 : positions.y,
      }}
      initial={{
        x: positions.x,
        y: positions.y,
      }}
      transition={{
        ...TWEEN,
        delay: 0.5,
      }}
    >
      <Stack className={styles.cultImageStack} gap={2}>
        <MotionImage
          layout="position"
          className={styles.cultImage}
          src={image}
        />
        <MotionDiv
          className={styles.productDescriptionContainer}
          animate={{
            opacity: isInView ? 1 : 0,
          }}
          initial={{ opacity: 0 }}
          transition={TWEEN}
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <Typography variant={"body1"} style={{ fontWeight: "bold" }}>
            {title}
          </Typography>
          <Typography
            variant={"body2"}
            fontSize={isMobile ? "10px" : undefined}
          >
            <span style={{ fontStyle: "italic" }}>{description}</span>
            {<br />}
            <br />
            Ingredients: {ingredients}
          </Typography>
        </MotionDiv>
      </Stack>
    </MotionDiv>
  );
}
