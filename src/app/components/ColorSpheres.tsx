import { colorHexCodes } from "../utils/colorHexCodes";

interface ColorSpheresProps {
  activeKeys: Set<number>;
}

type KeyColorPair = {
  key: number;
  color: string;
};

export const ColorSpheres = (props: ColorSpheresProps) => {
  // Coordinates were chosen to ensure that the visualizations are easily perceivable
  const yzStartCoordinate = [3, 2];

  // Array from numbers 36 through 95 representing the corresponding MIDI value of a piano key ( 5 octaves )
  const keyNumbers: number[] = Array.from(
    { length: 96 - 36 },
    (_, i) => i + 36
  );

  // Function to get a 2D-Array of hexCodes, each with a unique key signature
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

    let xCoordinate = -11; // 12 Keys in an octave centered around x coordinate 0 with spacing of 2 go from -11 to 11
    const yCoordinate = yzStartCoordinate[0] + spacing * rowIndex;
    const zCoordinate = yzStartCoordinate[1] - spacing * rowIndex;

    return keyColorPairs.map((keyColorPair) => {
      const currentX = xCoordinate; // Prevents spheres shifting to the left when left-side neighbor is not rendered
      xCoordinate += spacing;

      if (!props.activeKeys.has(keyColorPair.key)) {
        return null; // Don't render this sphere at all if not active
      }
      const mesh = (
        <mesh
          key={keyColorPair.key}
          position={[currentX, yCoordinate, zCoordinate]}
        >
          <sphereGeometry />
          <meshPhongMaterial color={keyColorPair.color} transparent={true} />
        </mesh>
      );

      return mesh;
    });
  });

  return <group>{orderedMaterials.flat()}</group>;
};
