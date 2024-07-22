import { ReactElement, Suspense, useEffect, useState } from 'react';
import Navbar from './Navbar';
import Layout from './Layout';
import { Stack } from '@mui/material';
import { Text3D, Float, Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Bulb from './Bulb';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

function App() {

  const [matcapTexture, setMatcapTexture] = useState(null)
  useEffect(() => {
    const loader = new TextureLoader()

    setMatcapTexture(loader.load('/matcaps/4.png'))
  }, [])

  const content = (
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
  return (
    <>
      <Navbar />
      {content}
    </>)

}

App.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default App