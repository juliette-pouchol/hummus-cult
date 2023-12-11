import { Suspense } from 'react';
import Portal from './Portal'

const Models = () => {
  return (
    <Suspense fallback={null}>
      <Portal
        path='/portal.glb'
        texturePath='baked.jpg'
        scale={new Array(3).fill(2.5)}
        position={[-4, 0, 0]}
        rotation={[0, 0, 0]}
      />
    </Suspense>
  )
}
export default Models;