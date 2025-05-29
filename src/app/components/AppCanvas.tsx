"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Light } from "./Light";
import { ColorSpheres } from "./ColorSpheres";

export function AppCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 7.5, 7.5] }}
      style={{ width: "100vw", height: "100vh", display: "block" }}
    >
      <Light />
      <gridHelper args={[30, 30]} />
      <ColorSpheres />
      <ambientLight intensity={0.1} />
      <OrbitControls />
    </Canvas>
  );
}
