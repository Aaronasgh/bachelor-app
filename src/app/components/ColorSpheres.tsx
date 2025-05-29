export const ColorSpheres = () => {
  return (
    <group>
      {/* Top Row – Lighter Colors */}
      <mesh position={[-11, 9, -4]}>
        <sphereGeometry />
        <meshPhongMaterial color="#ff9999" />
      </mesh>
      <mesh position={[-9, 9, -4]}>
        <sphereGeometry />
        <meshPhongMaterial color="#99d9ff" />
      </mesh>
      <mesh position={[-7, 9, -4]}>
        <sphereGeometry />
        <meshPhongMaterial color="#ff99f2" />
      </mesh>
      <mesh position={[-5, 9, -4]}>
        <sphereGeometry />
        <meshPhongMaterial color="#99fff2" />
      </mesh>
      <mesh position={[-3, 9, -4]}>
        <sphereGeometry />
        <meshPhongMaterial color="#ffcc99" />
      </mesh>
      <mesh position={[-1, 9, -4]}>
        <sphereGeometry />
        <meshPhongMaterial color="#ff99e6" />
      </mesh>
      <mesh position={[1, 9, -4]}>
        <sphereGeometry />
        <meshPhongMaterial color="#99ffff" />
      </mesh>
      <mesh position={[3, 9, -4]}>
        <sphereGeometry />
        <meshPhongMaterial color="#ffe699" />
      </mesh>
      <mesh position={[5, 9, -4]}>
        <sphereGeometry />
        <meshPhongMaterial color="#99ffcc" />
      </mesh>
      <mesh position={[7, 9, -4]}>
        <sphereGeometry />
        <meshPhongMaterial color="#ff99cc" />
      </mesh>
      <mesh position={[9, 9, -4]}>
        <sphereGeometry />
        <meshPhongMaterial color="#99e6ff" />
      </mesh>
      <mesh position={[11, 9, -4]}>
        <sphereGeometry />
        <meshPhongMaterial color="#fff599" />
      </mesh>

      {/* Middle Row – Original Colors */}
      <mesh position={[-11, 7, -2]}>
        <sphereGeometry />
        <meshPhongMaterial color="#ff0000" />
      </mesh>
      <mesh position={[-9, 7, -2]}>
        <sphereGeometry />
        <meshPhongMaterial color="#00A6FE" />
      </mesh>
      <mesh position={[-7, 7, -2]}>
        <sphereGeometry />
        <meshPhongMaterial color="#FE00EC" />
      </mesh>
      <mesh position={[-5, 7, -2]}>
        <sphereGeometry />
        <meshPhongMaterial color="#01FFD7" />
      </mesh>
      <mesh position={[-3, 7, -2]}>
        <sphereGeometry />
        <meshPhongMaterial color="#FF8C00" />
      </mesh>
      <mesh position={[-1, 7, -2]}>
        <sphereGeometry />
        <meshPhongMaterial color="#FF00C8" />
      </mesh>
      <mesh position={[1, 7, -2]}>
        <sphereGeometry />
        <meshPhongMaterial color="#02FFFF" />
      </mesh>
      <mesh position={[3, 7, -2]}>
        <sphereGeometry />
        <meshPhongMaterial color="#FEC600" />
      </mesh>
      <mesh position={[5, 7, -2]}>
        <sphereGeometry />
        <meshPhongMaterial color="#01FF7F" />
      </mesh>
      <mesh position={[7, 7, -2]}>
        <sphereGeometry />
        <meshPhongMaterial color="#FE0096" />
      </mesh>
      <mesh position={[9, 7, -2]}>
        <sphereGeometry />
        <meshPhongMaterial color="#00CCFF" />
      </mesh>
      <mesh position={[11, 7, -2]}>
        <sphereGeometry />
        <meshPhongMaterial color="#FEE600" />
      </mesh>

      {/* Bottom Row – Darker Colors */}
      <mesh position={[-11, 5, 0]}>
        <sphereGeometry />
        <meshPhongMaterial color="#990000" />
      </mesh>
      <mesh position={[-9, 5, 0]}>
        <sphereGeometry />
        <meshPhongMaterial color="#0066aa" />
      </mesh>
      <mesh position={[-7, 5, 0]}>
        <sphereGeometry />
        <meshPhongMaterial color="#990066" />
      </mesh>
      <mesh position={[-5, 5, 0]}>
        <sphereGeometry />
        <meshPhongMaterial color="#009988" />
      </mesh>
      <mesh position={[-3, 5, 0]}>
        <sphereGeometry />
        <meshPhongMaterial color="#aa5500" />
      </mesh>
      <mesh position={[-1, 5, 0]}>
        <sphereGeometry />
        <meshPhongMaterial color="#990066" />
      </mesh>
      <mesh position={[1, 5, 0]}>
        <sphereGeometry />
        <meshPhongMaterial color="#009999" />
      </mesh>
      <mesh position={[3, 5, 0]}>
        <sphereGeometry />
        <meshPhongMaterial color="#aa9900" />
      </mesh>
      <mesh position={[5, 5, 0]}>
        <sphereGeometry />
        <meshPhongMaterial color="#009944" />
      </mesh>
      <mesh position={[7, 5, 0]}>
        <sphereGeometry />
        <meshPhongMaterial color="#990050" />
      </mesh>
      <mesh position={[9, 5, 0]}>
        <sphereGeometry />
        <meshPhongMaterial color="#006688" />
      </mesh>
      <mesh position={[11, 5, 0]}>
        <sphereGeometry />
        <meshPhongMaterial color="#aa9900" />
      </mesh>
    </group>
  );
};
