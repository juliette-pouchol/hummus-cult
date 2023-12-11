import { useLoader } from '@react-three/fiber';
import * as THREE from 'three'

const Background = props => {
  const texture = useLoader(THREE.TextureLoader, '/sky.jpg')

  return (
    <primitive attach='background' object={texture} />
  )
}

export default Background;