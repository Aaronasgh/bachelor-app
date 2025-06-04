"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { XR, Controllers, createXRStore } from "@react-three/xr";
import { Light } from "./Light";
import { ColorSpheres } from "./ColorSpheres";
import { useEffect, useState } from "react";
import { setupMidi } from "../utils/setupMidi";

export function AppCanvas() {
  const [activeKeys, setActiveKeys] = useState<Set<number>>(new Set());

  const store = createXRStore();

  useEffect(() => {
    setupMidi(setActiveKeys);
  }, []);

  return (
    <>
      <Canvas
        camera={{ position: [0, 7.5, 7.5] }}
        style={{ width: "100vw", height: "100vh", display: "block" }}
      >
        <XR store={store}>
          <Light />
          <gridHelper args={[30, 30]} />
          <ColorSpheres activeKeys={activeKeys} />
          <ambientLight intensity={0.1} />
          <OrbitControls />
        </XR>
      </Canvas>
    </>
  );
}
