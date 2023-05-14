
import { Canvas } from '@react-three/fiber'
import './App.css'
import Scene from './components/Scene'
import Configurator from './components/Configurator'
import { CustomizationProvider } from './contexts/Customization'
import Details from './components/Details'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaEk3eYGeNa_iFiHlhDRVVmNXB1RV7wPY",
  authDomain: "car-configurator-4e6b9.firebaseapp.com",
  projectId: "car-configurator-4e6b9",
  storageBucket: "car-configurator-4e6b9.appspot.com",
  messagingSenderId: "83521384948",
  appId: "1:83521384948:web:df4c05865a82d09affc9a1",
  measurementId: "G-RP764G00YN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
        <Details/>
      </div>
      </CustomizationProvider>
    </>
  )
}

export default App
