import { Canvas } from '@react-three/fiber';
import { CameraControls } from '@react-three/drei'
import { ReactElement } from 'react';
import Bulb from '../components/Bulb';
import Models from '../components/Models';
import { Stack } from '@mui/material';
import Layout from '../components/Layout';


const Carousel = () => {
    return (
        <Stack className="section" height={'93vh'}>
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
        </Stack>
    )
}

Carousel.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Carousel