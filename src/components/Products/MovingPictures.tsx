import { Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { MotionDiv, MotionImage } from "../MotionComponents";
import styles from "./Products.module.css";
import lemonBuddha from "../../../images/hummus-cult/lemon-buddha.png";
import garlicJesus from "../../../images/hummus-cult/garlic-jesus.png";

export const TWEEN = {
  duration: 0.5,
  type: "spring",
  bounce: 0.2, // Reduced bounce
  damping: 20, // Increased damping
  stiffness: 80, // Adjusted stiffness
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
      jesusImageX: isMobileCheck ? middleOfScreen / 2 - 145 : -150,
      jesusImageY: isMobileCheck ? -50 : 280,
      buddhaImageX: isMobileCheck ? middleOfScreen / 2 - 50 : 170,
      buddhaImageY: isMobileCheck ? 50 : 100,
    });
  }, []);

  return (
    <MotionDiv
      className={styles.movingPicturesContainer}
      layout={true}
      animate={{
        paddingBottom: hasClicked ? 10 : 0,
        height: hasClicked ? 0 : "10px",
        minHeight: hasClicked ? (isMobile ? "50px" : "300px") : "900px",
      }}
      transition={{
        ...TWEEN,
      }}
    >
      <Stack className={styles.productsStack}>
        <Product
          layoutId="buddha1"
          image={lemonBuddha.src}
          hasClicked={hasClicked}
          positions={{ x: positions.buddhaImageX, y: positions.buddhaImageY }}
        />
        <Product
          layoutId="jesus1"
          image={garlicJesus.src}
          hasClicked={hasClicked}
          positions={{ x: positions.jesusImageX, y: positions.jesusImageY }}
        />
      </Stack>
    </MotionDiv>
  );
}

function Product({
  image,
  hasClicked,
  positions,
  layoutId,
}: {
  layoutId: string;
  image: string;
  hasClicked: boolean;
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
      animate={{
        x: hasClicked
          ? layoutId === "buddha1"
            ? -window.innerWidth
            : window.innerWidth
          : positions.x,
        y: hasClicked ? 0 : positions.y,
        opacity: hasClicked ? 0 : 1,
      }}
      initial={{
        x: positions.x,
        y: positions.y,
      }}
      transition={{
        ...TWEEN,
      }}
    >
      <Stack className={styles.cultImageStack}>
        <MotionImage
          layout="position"
          className={styles.cultImage}
          src={image}
        />
      </Stack>
    </MotionDiv>
  );
}
