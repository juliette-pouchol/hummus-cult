import { Stack } from "@mui/material";

import { ReactElement, useEffect, useState } from "react";
import { Canvas } from '@react-three/fiber';
import { Text3D, Float, Sky } from '@react-three/drei'
import { Suspense } from 'react';
import Bulb from './components/bulb';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import Layout from "./components/layout";

const HomePage = () => {
  const [matcapTexture, setMatcapTexture] = useState(null)
  useEffect(() => {
    const loader = new TextureLoader()

    setMatcapTexture(loader.load('/matcaps/8.png'))
  }, [])

  return (
    // Need to leave room for the header
    <Stack height={'93vh'}>
      <Canvas shadows camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.2} />
        <Bulb position={[0, 5, 1]} />
        <Suspense fallback={null}>
          <Float>
            <Text3D font={'/helvetiker_regular.typeface.json'} bevelEnabled bevelSize={0.05} position={[-4, 0, 0]}>
              Hi, I’m Juliette
              <meshMatcapMaterial matcap={matcapTexture} />
            </Text3D>
          </Float>
        </Suspense>
      </Canvas>
    </Stack>
  )
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default HomePage