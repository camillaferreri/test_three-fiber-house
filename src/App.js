import { useRef } from "react"
import { Canvas, extend, useThree, useFrame } from 'react-three-fiber';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import './App.css';

extend({ OrbitControls });

const CameraControls = () => {
  const { camera, gl: { domElement } } = useThree();

  const controls = useRef();
  useFrame((state) => controls.current.update());
  return <orbitControls ref={controls} args={[camera, domElement]} />;
};

const Front = () => {
  const COL_SIZE = [.1, 2.55, .2]
  const ROW_SIZE = [2.7, .1, .2]

  return <group>
    {/* Top */}
    <mesh position={[0, 1.3, 0]}>
      <boxBufferGeometry attach='geometry' args={[4, 2.5, .2]}  />
      <meshStandardMaterial attach="material" color="#ffe0b5" />
    </mesh>

    {/* Row */}
    {/* Top */}
    <mesh position={[-.45, 0, 0]}>
      <boxBufferGeometry attach='geometry' args={ROW_SIZE}  />
      <meshStandardMaterial attach="material" color="#000" />
    </mesh>

    {/* Bottom */}
    <mesh position={[-.45, -2.45, 0]}>
      <boxBufferGeometry attach='geometry' args={ROW_SIZE}  />
      <meshStandardMaterial attach="material" color="#000" />
    </mesh>

    {/* Columns */}
    {/* Left */}
    <mesh position={[-1.75, -1.22, 0]}>
      <boxBufferGeometry attach='geometry' args={COL_SIZE}  />
      <meshStandardMaterial attach="material" color="#000" />
    </mesh>

    {/* Left 2 */}
    <mesh position={[-1.1, -1.22, 0]}>
      <boxBufferGeometry attach='geometry' args={COL_SIZE}  />
      <meshStandardMaterial attach="material" color="#000" />
    </mesh>

    {/* Center */}
    <mesh position={[-0.45, -1.22, 0]}>
      <boxBufferGeometry attach='geometry' args={COL_SIZE}  />
      <meshStandardMaterial attach="material" color="#000" />
    </mesh>

    {/* Right 2 */}
    <mesh position={[.25, -1.22, 0]}>
      <boxBufferGeometry attach='geometry' args={COL_SIZE}  />
      <meshStandardMaterial attach="material" color="#000" />
    </mesh>

    {/* Right */}
    <mesh position={[.95, -1.22, 0]}>
      <boxBufferGeometry attach='geometry' args={COL_SIZE}  />
      <meshStandardMaterial attach="material" color="#000" />
    </mesh>
    
    {/* Right wall */}
    <mesh position={[1.5, -1.22, 0]}>
      <boxBufferGeometry attach='geometry' args={[1, 2.55, .2]}  />
      <meshStandardMaterial attach="material" color="#ffe0b5" />
    </mesh>
  </group>
}

function App() {
  return (
    <>
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [0, 10, 10], fov: 60 }}
      >
        <CameraControls />

        <ambientLight intensity={.3} />
        <directionalLight 
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[0, -10, 0]} intensity={1} />

        <group>
          {/* Front */}
          <Front />

          {/* Back */}
          <mesh position={[0, 0, -5]}>
            <boxBufferGeometry attach='geometry' args={[4, 5, .2]}  />
            <meshStandardMaterial attach="material" color="#ffe0b5" />
          </mesh>

          {/* Left */}
          <mesh position={[-1.9, 0, -2.5]}>
            <boxBufferGeometry attach='geometry' args={[.2, 5, 5.2]}  />
            <meshStandardMaterial attach="material" color="#ffe0b5" />
          </mesh>

          {/* Right */}
          <mesh position={[1.9, 0, -2.5]}>
            <boxBufferGeometry attach='geometry' args={[.2, 5, 5.2]}  />
            <meshStandardMaterial attach="material" color="#ffe0b5" />
          </mesh>

          {/* Roof */}
          <mesh position={[0, 2.5, -2.5]}>
            <boxBufferGeometry attach='geometry' args={[4, .2, 5.2]}  />
            <meshStandardMaterial attach="material" color="#ffe0b5" />
          </mesh>
          
          {/* Floor */}
          <mesh position={[0, -2.6, -2.5]}>
            <boxBufferGeometry attach='geometry' args={[4, .2, 5.2]}  />
            <meshStandardMaterial attach="material" color="#ffe0b5" />
          </mesh>

          {/* Second floor */}
          <mesh position={[0, .2, -2.5]}>
            <boxBufferGeometry attach='geometry' args={[4, .2, 5]}  />
            <meshStandardMaterial attach="material" color="#ffe0b5" />
          </mesh>
        </group>
      </Canvas>
    </>
  );
}

export default App;
