"use client";

import { useRef } from "react";
import { DirectionalLight, DirectionalLightHelper } from "three";
import { useHelper } from "@react-three/drei";

export const Light = () => {
  const dirLight = useRef<DirectionalLight>(null!);
  useHelper(dirLight, DirectionalLightHelper, 1, "red");

  return (
    <directionalLight
      // ref={dirLight}
      color="white"
      position={[0, 5, 5]}
      target-position={[0, 5, 0]}
    />
  );
};
