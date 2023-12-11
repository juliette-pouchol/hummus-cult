import { Canvas } from '@react-three/fiber';
import Bulb from './bulb'
import Models from './Models'
import CameraControls from './CameraControls'

const Carousel = () => {
  return (
    <section className="section">
      <Canvas
        shadows
        style={{ background: 'black' }}
        camera={{ position: [6, 6, 6] }}
      >
        <ambientLight intensity={0.2} />
        <CameraControls />

        <Bulb position={[14, 6, 0]} />
        <Models />
      </Canvas>
    </section>
  )
}

export default Carousel;