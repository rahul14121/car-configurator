import { MeshReflectorMaterial, PresentationControls, Stage } from "@react-three/drei";

// import { useLoader } from '@react-three/fiber'
import { Suspense } from "react";
import Car1 from "./Car1";
import Car2 from "./Car2";
import { useCustomization } from "../contexts/Customization";
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function CarSelect({carState}){
  if (carState === "car1") {
    return <Car1/>
  }
  return <Car2/>
}

const Scene = () => {
  

    // const gltf = useLoader(GLTFLoader, './models/car.gltf')
    const {car, setCar} = useCustomization();
    return (
        <PresentationControls speed={1.5} global zoom={0.7} polar={[-0.1, Math.PI / 4]}>
          <Stage environment={"city"} intensity={0.6} contactShadow={false}>
        {/* <mesh>
            <boxGeometry/>
            <meshNormalMaterial/>
        </mesh> */}
        <Suspense fallback={null}>
            <CarSelect carState={car}/>
        </Suspense>
        </Stage>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.9, 0]}>
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