
import { Canvas } from '@react-three/fiber'
import './App.css'
import Scene from './components/Scene'

function App() {


  return (
    <>
      <div className = "App">
        <Canvas>
          <Scene/>
        </Canvas>
      </div>
    </>
  )
}

export default App
