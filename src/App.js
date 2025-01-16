import './App.css';
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";


function Cube() {
  const meshRef = useRef(null);

  useFrame(() => {
    if (!meshRef.current) {
      return;
    } 

    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <PerspectiveCamera />
      <boxGeometry />
      <meshStandardMaterial color="hotpink" />
      <OrbitControls/>
    </mesh>
  );
}

function App() {
  return (
    <Canvas>
      <ambientLight/>
      <pointLight position={[10, 10, 10]}/>
      <spotLight position={[15, 15, 15]}/>
      <directionalLight position={[0, 0, 5]}/>
      <hemisphereLight/>
      <Cube />
    </Canvas>
  );
}

export default App;
