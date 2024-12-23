import React from "react";
import { ReactElement } from "react";
import { MotionDiv, MotionP } from "./MotionComponents";

export default function MaximizingSection({
  content,
  id,
}: {
  content: ReactElement;
  id: string;
}) {
  const [scrollProgress, setScrollProgress] = React.useState(1);
  const [contentPosition, setContentPosition] = React.useState(0);
  const [windowHeight, setWindowHeight] = React.useState(0);

  React.useEffect(() => {
    setWindowHeight(window.innerHeight);

    const updatePosition = () => {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, 1 - rect.top / windowHeight));
        setScrollProgress(progress);
        setContentPosition(rect.top);
      }
    };
    updatePosition();
    window.addEventListener("scroll", updatePosition);
    return () => window.removeEventListener("scroll", updatePosition);
  }, [windowHeight, id]);

  return (
    <MotionDiv
      layout={true}
      transition={SPRING}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 0.6 + scrollProgress * 0.4,
        scale: 0.8 + scrollProgress * 0.2,
        y: 20 * (1 - scrollProgress),
      }}
      className={`wrapper ${scrollProgress >= 0.9 ? "maximized" : ""}`}
    >
      <MotionP
        layout="position"
        transition={SPRING}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {content}
      </MotionP>
    </MotionDiv>
  );
}

const SPRING = {
  type: "spring",
  stiffness: 200,
  damping: 40,
  duration: 3,
};
