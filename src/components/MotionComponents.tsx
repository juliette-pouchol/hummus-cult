import dynamic from "next/dynamic";

export const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  {
    ssr: false,
  }
);

export const MotionP = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.p),
  {
    ssr: false,
  }
);

export const MotionImage = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.img),
  {
    ssr: false,
  }
);

export const MotionButton = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.button),
  {
    ssr: false,
  }
);
