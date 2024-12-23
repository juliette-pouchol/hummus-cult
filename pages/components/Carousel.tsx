import { Canvas } from "@react-three/fiber";
import Bulb from "./Bulb";
import Models from "./Models";
import CameraControls from "./CameraControls";
import { Typography } from "@mui/material";

const Carousel = () => {
  return (
    <section className="section">
      <Canvas
        shadows
        style={{ background: "black" }}
        camera={{ position: [6, 6, 6] }}
      >
        <Typography>Hi there</Typography>
      </Canvas>
    </section>
  );
};

export default Carousel;
