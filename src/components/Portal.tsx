import { useGLTF, useTexture, Sparkles } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { Texture } from "three";
import { Group } from "three";
import { themeAtom } from "../../app/atoms/atoms";
import { useAtom } from "jotai";

const Portal = (props: any) => {
  const [theme] = useAtom(themeAtom);
  const firefliesScale = Array.from(
    { length: 80 },
    () => 0.5 + Math.random() * 5
  );
  const bakedTexture = useTexture(props.texturePath) as Texture;
  const { nodes } = Array.isArray(useGLTF(props.path))
    ? useGLTF(props.path)[0]
    : useGLTF(props.path);

  const portal = useRef<Group>(null);

  return (
    <group ref={portal}>
      {theme === "dark" && (
        <Sparkles
          count={firefliesScale.length}
          size={20}
          position={[0, 4, 0]}
          scale={[10, 4, 10]}
          speed={0.3}
        />
      )}
      <mesh
        geometry={nodes.portalLight.geometry}
        position={[0.2, 1.97, -4.2]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={3}
      ></mesh>
      <mesh
        geometry={nodes.poleLightA.geometry}
        material-color="#f0bf94"
        position={[2.96, 1.83, -1.025]}
        rotation={[Math.PI, 0, 0]}
        scale={3.1}
      />
      <mesh
        geometry={nodes.poleLightA.geometry}
        material-color="#f0bf94"
        position={[-2.186, 1.86, -1.03]}
        rotation={[Math.PI, 0, 0]}
        scale={3.1}
      />
      <mesh geometry={nodes.baked.geometry} {...props}>
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
    </group>
  );
};

export default Portal;
