"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { XR, XROrigin, createXRStore } from "@react-three/xr";
import { Light } from "./Light";
import { ColorSpheres } from "./ColorSpheres";
import { useEffect, useState } from "react";
import { setupMidi } from "../utils/setupMidi";
import { Vector3 } from "three";

const store = createXRStore({
  hand: { teleportPointer: true },
  controller: { teleportPointer: true },
});

export function AppCanvas() {
  const [activeKeys, setActiveKeys] = useState<Set<number>>(new Set());

  useEffect(() => {
    setupMidi(setActiveKeys);
  }, []);

  // Coordinates were chosen to ensure that the visualizations are easily perceivable
  const cameraPosition = new Vector3(0, 7.5, 12);
  const XROriginPosition = new Vector3(0, 3, 20);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          top: 20,
          left: 20,
          zIndex: 1,
          gap: 10,
        }}
      >
        <button onClick={() => store.enterVR()}>Enter VR</button>
      </div>

      <Canvas
        camera={{ position: cameraPosition }}
        style={{ width: "100vw", height: "100vh", display: "block" }}
      >
        <XR store={store}>
          <ambientLight intensity={0.1} />
          <Light />
          <gridHelper args={[30, 30]} />

          <XROrigin position={XROriginPosition}>
            <OrbitControls />
          </XROrigin>
          <ColorSpheres activeKeys={activeKeys} />
        </XR>
      </Canvas>
    </>
  );
}
