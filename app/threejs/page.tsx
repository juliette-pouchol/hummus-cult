import { Canvas } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
import Bulb from "../../src/components/Bulb";
import { Stack } from "@mui/material";
import { Suspense } from "react";
import Portal from "../../src/components/Portal";

const ThreeJs = () => {
  return (
    <Stack className="section" height={"93vh"}>
      <Canvas
        shadows
        style={{ background: "var(--primary-color)" }}
        camera={{ position: [6, 6, 6], fov: 80 }}
      >
        <ambientLight intensity={0.2} />
        <CameraControls />
        <Bulb position={[14, 6, 0]} />
        <Suspense fallback={null}>
          <Portal
            path="/portal.glb"
            texturePath="baked.jpg"
            scale={new Array(3).fill(2.5)}
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
          />
        </Suspense>
      </Canvas>
    </Stack>
  );
};

export default ThreeJs;
