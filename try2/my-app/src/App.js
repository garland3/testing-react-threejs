import React from "react";
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"
import './index.css';
import { Physics, useBox , usePlane} from "@react-three/cannon";

function Box() {
  const [ref, api] = useBox(() => ({ mass: 1 }));
  return (
    <mesh
     ref={ref} position={[0, 0, 0]}
     onClick={()=>{
      api.velocity.set(0,2,0);
     }}
    >
      <boxGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="green" />
    </mesh>
  )
}

function Plane() {
  const [ref] = usePlane (() => ({
     rotation:  [-Math.PI / 2, 0, 0] 
    }));
  return (
    <mesh ref = {ref} position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry attach="geometry" args={[100, 100]} />

      <meshLambertMaterial attach="material" color="blue" />
    </mesh>
  )
}

var offset = 7;
export default function App() {
  return <Canvas camera={{position: [offset, 3, offset]}}>

    <OrbitControls />
    <Physics>
      <Box />
      <Plane />
    </Physics>
    {/*  Adding a triad helped me know which direction I'm looking at. 
    The X axis is red. The Y axis is green. The Z axis is blue.  */}
    <axesHelper size={5} />
    <ambientLight intensity={0.5} />
    <Stars />
    <spotLight position={[10, 15, 10]} angle={0.3} />
  </Canvas>
}
