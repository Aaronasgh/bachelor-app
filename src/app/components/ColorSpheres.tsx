import { colorHexCodes } from "../utils/colorHexCodes";

interface ReactiveSpheresProps {
  color: string;
  active: boolean;
}

interface ColorSpheresProps {
  activeKeys: Set<number>;
}

type KeyColorPair = {
  key: number;
  color: string;
};

const reactiveSpheres = ({ color }: ReactiveSpheresProps) => {
  return <meshPhongMaterial color={color} transparent={true} />;
};

export const ColorSpheres = (props: ColorSpheresProps) => {
  const yzStartCoordinate = [3, 2];

  // Array from numbers 36 through 96 representing the corresponding MIDI value of a piano key in 5 octaves
  const keyNumbers: number[] = Array.from(
    { length: 96 - 36 },
    (_, i) => i + 36
  );

  // Function to get 2D-Array of hexCodes with a unique key signature
  const numberedHexCodes = colorHexCodes.map((hexCodeArray, rowIndex) => {
    return hexCodeArray.map((hexCode, columnIndex) => {
      return {
        key: keyNumbers[rowIndex * 12 + columnIndex], // There are 12 Elements per row
        color: hexCode,
      } as KeyColorPair;
    });
  });

  const orderedMaterials = numberedHexCodes.map((keyColorPairs, rowIndex) => {
    const spacing = 2;

    // 12 Keys in an octave centered around x coordinate 0 with spacing of 2 go from -11 to 11
    let xCoordinate = -11;
    const yCoordinate = yzStartCoordinate[0] + spacing * rowIndex;
    const zCoordinate = yzStartCoordinate[1] - spacing * rowIndex;

    return keyColorPairs.map((keyColorPair) => {
      const currentX = xCoordinate; // Save current position
      xCoordinate += spacing; // Move x for next sphere regardless
      if (!props.activeKeys.has(keyColorPair.key)) {
        return null; // Don't render this sphere at all if not active
      }
      const mesh = (
        <mesh
          key={keyColorPair.key}
          position={[currentX, yCoordinate, zCoordinate]}
        >
          <sphereGeometry />
          {reactiveSpheres({
            active: props.activeKeys.has(keyColorPair.key),
            color: keyColorPair.color,
          })}
        </mesh>
      );

      return mesh;
    });
  });

  console.log(keyNumbers);

  return <group>{orderedMaterials.flat()}</group>;
};
