"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { XR, XROrigin, createXRStore } from "@react-three/xr";
import { Light } from "./Light";
import { ColorSpheres } from "./ColorSpheres";
import { useEffect, useState } from "react";
import { setupMidi } from "../utils/setupMidi";

const store = createXRStore({
  hand: { teleportPointer: true },
  controller: { teleportPointer: true },
});

export function AppCanvas() {
  const [activeKeys, setActiveKeys] = useState<Set<number>>(new Set());

  useEffect(() => {
    setupMidi(setActiveKeys);
  }, []);

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
        <button onClick={() => store.enterAR()}>Enter AR</button>
      </div>

      <Canvas
        camera={{ position: [0, 7.5, 12] }}
        style={{ width: "100vw", height: "100vh", display: "block" }}
      >
        <XR store={store}>
          <ambientLight intensity={0.1} />
          <Light />
          <gridHelper args={[30, 30]} />

          <XROrigin position={[0, 3, 20]}>
            <OrbitControls />
          </XROrigin>
          <ColorSpheres activeKeys={activeKeys} />

          {/* <TeleportTarget onTeleport={setPosition}>
            <mesh scale={[10, 1, 10]} position={[0, -0.5, 7.5]}>
              <boxGeometry />
              <meshBasicMaterial color="green" />
            </mesh>
          </TeleportTarget> */}
        </XR>
      </Canvas>
    </>
  );
}
