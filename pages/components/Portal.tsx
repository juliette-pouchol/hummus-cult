import { useGLTF, useTexture, shaderMaterial, Sparkles } from '@react-three/drei'
import { useRef } from 'react'
import Bulb from './Bulb'
import { Texture } from 'three'

const Portal = props => {
    const firefliesScale = Array.from({ length: 80 }, () => 0.5 + Math.random() * 5)
    const bakedTexture = useTexture(props.texturePath) as Texture
    const { nodes } = Array.isArray(useGLTF(props.path)) ? useGLTF(props.path)[0] : useGLTF(props.path);

    const portal = useRef()

    return (
        <group ref={portal}>
            <Sparkles count={firefliesScale.length} size={20} position={[-4, 4, 0]} scale={[10, 4, 10]} speed={0.3} />
            <mesh
                geometry={nodes.portalLight.geometry}
                position={[-3.8, 1.97, -4.2]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={props.scale}
            >
            </mesh>
            <mesh
                geometry={nodes.poleLightA.geometry}
                material-color="#f0bf94"
                position={[-1.036, 1.83, -1.03]}
                rotation={[Math.PI, 0, 0]}
                scale={props.scale}
            >
                <Bulb position={[-1.036, 1.83, -1.03]} />
            </mesh>
            <mesh
                geometry={nodes.poleLightA.geometry}
                material-color="#f0bf94"
                position={[-6.186, 1.83, -1.03]}
                rotation={[Math.PI, 0, 0]}
                scale={props.scale}
            >
                <Bulb position={[-6.186, 1.83, -1.03]} />
            </mesh>
            <mesh geometry={nodes.baked.geometry} {...props}>
                <meshBasicMaterial map={bakedTexture} map-flipY={false} />
            </mesh>
        </group>
    )
}

export default Portal;