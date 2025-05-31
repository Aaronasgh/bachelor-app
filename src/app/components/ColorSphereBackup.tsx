interface ReactiveSpheresProps {
  color: string;
  active: boolean;
}
interface ColorSpheresProps {
  active: boolean;
}

const reactiveSpheres = ({ active, color }: ReactiveSpheresProps) => {
  return (
    <meshPhongMaterial
      color={color}
      opacity={active ? 0 : 1}
      transparent={true}
    />
  );
};

export const ColorSpheres = (props: ColorSpheresProps) => {
  return (
    <group>
      {/* Row 1 – Lightest (y=13) */}
      <mesh position={[-11, 13, -8]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#fff0f0" })}
      </mesh>
      <mesh position={[-9, 13, -8]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#e6f5ff" })}
      </mesh>
      <mesh position={[-7, 13, -8]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#fff0fa" })}
      </mesh>
      <mesh position={[-5, 13, -8]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#e6fffb" })}
      </mesh>
      <mesh position={[-3, 13, -8]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#fff7e6" })}
      </mesh>
      <mesh position={[-1, 13, -8]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#fff0f7" })}
      </mesh>
      <mesh position={[1, 13, -8]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#e6ffff" })}
      </mesh>
      <mesh position={[3, 13, -8]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#fffbe6" })}
      </mesh>
      <mesh position={[5, 13, -8]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#e6fff8" })}
      </mesh>
      <mesh position={[7, 13, -8]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#fff0f5" })}
      </mesh>
      <mesh position={[9, 13, -8]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#e6f8ff" })}
      </mesh>
      <mesh position={[11, 13, -8]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#ffffe6" })}
      </mesh>

      {/* Row 2 – Lighter (y=11) */}
      <mesh position={[-11, 11, -6]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#ffbfbf" })}
      </mesh>
      <mesh position={[-9, 11, -6]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#bfe1ff" })}
      </mesh>
      <mesh position={[-7, 11, -6]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#ffbff2" })}
      </mesh>
      <mesh position={[-5, 11, -6]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#bffff9" })}
      </mesh>
      <mesh position={[-3, 11, -6]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#ffdbb3" })}
      </mesh>
      <mesh position={[-1, 11, -6]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#ffbfe6" })}
      </mesh>
      <mesh position={[1, 11, -6]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#bfffff" })}
      </mesh>
      <mesh position={[3, 11, -6]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#fff6bf" })}
      </mesh>
      <mesh position={[5, 11, -6]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#bfffdc" })}
      </mesh>
      <mesh position={[7, 11, -6]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#ffbfd9" })}
      </mesh>
      <mesh position={[9, 11, -6]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#bff0ff" })}
      </mesh>
      <mesh position={[11, 11, -6]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#fffebf" })}
      </mesh>

      {/* Row 3 – Mid-light (y=9) */}
      <mesh position={[-11, 9, -4]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#ff8080" })}
      </mesh>
      <mesh position={[-9, 9, -4]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#80c9ff" })}
      </mesh>
      <mesh position={[-7, 9, -4]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#ff80d9" })}
      </mesh>
      <mesh position={[-5, 9, -4]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#80fff7" })}
      </mesh>
      <mesh position={[-3, 9, -4]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#ffbb80" })}
      </mesh>
      <mesh position={[-1, 9, -4]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#ff80cc" })}
      </mesh>
      <mesh position={[1, 9, -4]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#80ffff" })}
      </mesh>
      <mesh position={[3, 9, -4]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#fff280" })}
      </mesh>
      <mesh position={[5, 9, -4]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#80ffcc" })}
      </mesh>
      <mesh position={[7, 9, -4]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#ff80b3" })}
      </mesh>
      <mesh position={[9, 9, -4]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#80cfff" })}
      </mesh>
      <mesh position={[11, 9, -4]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#fff180" })}
      </mesh>

      {/* Row 4 – Base/original colors (y=7) */}
      <mesh position={[-11, 7, -2]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#ff0000" })}
      </mesh>
      <mesh position={[-9, 7, -2]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#00A6FE" })}
      </mesh>
      <mesh position={[-7, 7, -2]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#FE00EC" })}
      </mesh>
      <mesh position={[-5, 7, -2]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#01FFD7" })}
      </mesh>
      <mesh position={[-3, 7, -2]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#FF8C00" })}
      </mesh>
      <mesh position={[-1, 7, -2]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#FF00C8" })}
      </mesh>
      <mesh position={[1, 7, -2]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#02FFFF" })}
      </mesh>
      <mesh position={[3, 7, -2]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#FEC600" })}
      </mesh>
      <mesh position={[5, 7, -2]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#01FF7F" })}
      </mesh>
      <mesh position={[7, 7, -2]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#FE0096" })}
      </mesh>
      <mesh position={[9, 7, -2]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#00CCFF" })}
      </mesh>
      <mesh position={[11, 7, -2]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#FEE600" })}
      </mesh>

      {/* Bottom Row – Brighter but still darker than Row 4 */}
      <mesh position={[-11, 5, 0]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#bb3333" })}
      </mesh>
      <mesh position={[-9, 5, 0]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#3388cc" })}
      </mesh>
      <mesh position={[-7, 5, 0]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#bb3399" })}
      </mesh>
      <mesh position={[-5, 5, 0]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#33bbaa" })}
      </mesh>
      <mesh position={[-3, 5, 0]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#cc7733" })}
      </mesh>
      <mesh position={[-1, 5, 0]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#bb3399" })}
      </mesh>
      <mesh position={[1, 5, 0]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#33bbbb" })}
      </mesh>
      <mesh position={[3, 5, 0]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#ccbb33" })}
      </mesh>
      <mesh position={[5, 5, 0]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#33bb66" })}
      </mesh>
      <mesh position={[7, 5, 0]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#bb3366" })}
      </mesh>
      <mesh position={[9, 5, 0]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#3377aa" })}
      </mesh>
      <mesh position={[11, 5, 0]}>
        <sphereGeometry />
        {reactiveSpheres({ active: props.active, color: "#ccbb33" })}
      </mesh>
    </group>
  );
};
