
import { Canvas } from '@react-three/fiber'
import './App.css'
import Scene from './components/Scene'

function App() {


  return (
    <>
      <div className = "App">
        <Canvas>
          <color attach="background" args={["#101010"]}/>
          <fog attach="fog" args={['#101010', 10, 20]} />
          <Scene/>
        </Canvas>
      </div>
    </>
  )
}

export default App
