import { MeshReflectorMaterial, PresentationControls, Stage } from "@react-three/drei";

const Scene = () => {
    return (
        <PresentationControls speed={1.5} global zoom={0.7} polar={[-0.1, Math.PI / 4]}>
          <Stage environment={"city"} intensity={0.6} contactShadow={false}>
        <mesh>
            <boxGeometry/>
            <meshNormalMaterial/>
        </mesh>
        </Stage>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[170, 170]} />
            <MeshReflectorMaterial
              blur={[300, 100]}
              resolution={2048}
              mixBlur={1}
              mixStrength={45}
              roughness={1}
              depthScale={1.3}
              minDepthThreshold={0.3}
              maxDepthThreshold={1.5}
              color="#101010"
              metalness={0.6}
            />
          </mesh>
        </PresentationControls>
    )
}

export default Scene;