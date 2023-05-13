
import { Canvas } from '@react-three/fiber'
import './App.css'
import Scene from './components/Scene'
import Configurator from './components/Configurator'
import { CustomizationProvider } from './contexts/Customization'

function App() {


  return (
    <>
    <CustomizationProvider>
      <div className = "App">
        <Canvas>
          <color attach="background" args={["#101010"]}/>
          <fog attach="fog" args={['#101010', 10, 20]} />
          <Scene/>
        </Canvas>
        <Configurator/>
      </div>
      </CustomizationProvider>
    </>
  )
}

export default App
