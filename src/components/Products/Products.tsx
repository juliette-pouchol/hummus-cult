import { Stack, Typography } from "@mui/material";
import { MotionDiv, MotionImage, MotionP } from "../MotionComponents";
import styles from "./Products.module.css";
import lemonBuddha from "../../../images/hummus-cult/lemon-buddha.png";
import lemon from "../../../images/hummus-cult/lemon.png";
import garlicJesus from "../../../images/hummus-cult/garlic-jesus.png";
import garlic from "../../../images/hummus-cult/garlic.png";
import { useState, useEffect } from "react";

const TWEEN = {
  type: "tween",
  duration: 1,
  ease: "easeInOut",
};

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
      jesusImageY: isMobileCheck ? 380 : 280,
      buddhaImageX: isMobileCheck ? middleOfScreen / 2 - 40 : 170,
      buddhaImageY: isMobileCheck ? 250 : 100,
    });
  }, []);

  return (
    <MotionDiv
      className={styles.productsContainer}
      animate={{
        paddingBottom: hasClicked ? 10 : 0,
      }}
    >
      <MotionDiv
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
        transition={TWEEN}
      >
        <Typography variant="h2">Two dank flavours</Typography>
      </MotionDiv>
      <Stack className={styles.productsStack}>
        <Product
          layoutId="buddha"
          image={lemonBuddha.src}
          backgroundImage={lemon.src}
          title="Lemon Buddha"
          description="Lemon and turmeric to enlighten the mind."
          ingredients="garbanzo beans, olive oil, lemon..."
          hasClicked={hasClicked}
          isMobile={isMobile}
          positions={{ x: positions.buddhaImageX, y: positions.buddhaImageY }}
        />
        <Product
          layoutId="jesus"
          image={garlicJesus.src}
          backgroundImage={garlic.src}
          title="Garlic Jesus"
          description="Garlic and habanero spice to open the heart."
          ingredients="garbanzo beans, olive oil, garlic..."
          hasClicked={hasClicked}
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
  hasClicked,
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
  hasClicked: boolean;
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
        position: hasClicked ? "relative" : "absolute",
      }}
      animate={{
        x: hasClicked ? 0 : positions.x,
        y: hasClicked ? 0 : positions.y,
      }}
      initial={{
        x: positions.x,
        y: positions.y,
      }}
      transition={TWEEN}
    >
      <Stack className={styles.cultImageStack}>
        <MotionImage
          layout="position"
          className={styles.cultImage}
          src={image}
        />
        <MotionDiv
          className={styles.productDescriptionContainer}
          animate={{
            opacity: hasClicked ? 1 : 0,
          }}
          initial={{ opacity: 0 }}
          transition={TWEEN}
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <Typography
            fontFamily="var(--font-milau)"
            variant={isMobile ? "h5" : "h4"}
          >
            {title}
          </Typography>
          {!isMobile && <br />}
          <Typography
            fontFamily="var(--font-milau)"
            variant={isMobile ? "body2" : "h5"}
            fontSize={isMobile ? "10px" : undefined}
          >
            {description}
            {<br />}
            {!isMobile && <br />}
            Ingredients: {ingredients}
          </Typography>
        </MotionDiv>
      </Stack>
    </MotionDiv>
  );
}
