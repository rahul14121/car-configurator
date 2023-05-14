import {
  MeshReflectorMaterial,
  PresentationControls,
  Stage,
} from "@react-three/drei";

// import { useLoader } from '@react-three/fiber'
import { Suspense } from "react";
import Car1 from "./Car1";
import Car2 from "./Car2";
import { useCustomization } from "../contexts/Customization";
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function CarSelect({ carState }) {
  if (carState === "car1") {
    return <Car1 />;
  }
  return <Car2 />;
}

const Scene = () => {
  // const gltf = useLoader(GLTFLoader, './models/car.gltf')
  const { car, setCar } = useCustomization();
  return (
    /* `PresentationControls` is a component from the `@react-three/drei` library that provides
    camera controls for a 3D scene. The `speed` prop sets the speed of camera movement, `global`
    prop enables global mode which allows the camera to move beyond the scene boundaries, `zoom`
    prop sets the initial zoom level of the camera, and `polar` prop sets the initial polar angle of the camera. */
    <PresentationControls
      speed={1.5}
      global
      zoom={0.7}
      polar={[-0.1, Math.PI / 4]}
    >
      {/* This code block is rendering a 3D scene using the `@react-three/drei` library. The `Stage`
      component sets up the environment for the scene, with the `environment` prop specifying the
      type of environment (in this case, a city), `intensity` prop setting the intensity of the
      lighting, and `contactShadow` prop disabling contact shadows. */}
      <Stage environment={"city"} intensity={0.6} contactShadow={false}>
        {/* <mesh>
            <boxGeometry/>
            <meshNormalMaterial/>
        </mesh> */}
        {/* `Suspense` is a component from React that allows us to handle loading
        states for components that are asynchronously loaded. In this case, it is used to handle the
        loading of the 3D car model. The `fallback` prop specifies what to render while the car
        model is loading. In this case, we set it to `null` because we don't want to render anything
        while the car model is loading. `CarSelect` is the component that will be
      rendered once the car model is loaded. It will load either the first or second car depending on the value of the state. */}
        <Suspense fallback={null}>
          <CarSelect carState={car} />
        </Suspense>
      </Stage>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.9, 0]}>
        <planeGeometry args={[170, 170]} />
        {/* `MeshReflectorMaterial` is a material component from the `@react-three/drei` library that
        creates a reflective surface on a mesh. The props passed to it are used to customize the
    appearance and behavior of the reflective surface. */}
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
  );
};

export default Scene;
