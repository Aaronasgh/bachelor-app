import { colorHexCodes } from "../utils/colorHexCodes";

// interface ReactiveSpheresProps {
//   color: string;
//   active: boolean;
// }

// interface ColorSpheresProps {
//   active: boolean;
// }

type KeyColorPair = {
  key: number;
  color: string;
};

// const reactiveSpheres = ({ active, color }: ReactiveSpheresProps) => {
//   return (
//     <meshPhongMaterial
//       color={color}
//       opacity={active ? 0 : 1}
//       transparent={true}
//     />
//   );
// };

const yzStartCoordinate = [3, 2];
// const xyzCoordinates = new Set<number>();

// Array from numbers 36 through 96 representing the corresponding MIDI value of a piano key in 5 octaves
const keyNumbers: number[] = Array.from({ length: 96 - 36 }, (_, i) => i + 1);

// Function to get 2D-Array of hexCodes with a unique key signature
const numberedHexCodes = colorHexCodes.map((hexCodeArray, rowIndex) => {
  return hexCodeArray.map((hexCode, columnIndex) => {
    return {
      key: keyNumbers[rowIndex * 12 + columnIndex], // Correct key assignment
      color: hexCode,
    } as KeyColorPair;
  });
});

const orderedMaterials = numberedHexCodes.map((keyColorPairs) => {
  const spacing = 2;

  // 12 Keys in an octave centered around x coordinate 0 with spacing of 2 go from -11 to 11
  let xStartCoordinate = -11;

  yzStartCoordinate[0] += spacing;
  yzStartCoordinate[1] -= spacing;
  return keyColorPairs.map((keyColorPair) => {
    console.log("keyColorPair: ", keyColorPair);
    const mesh = (
      <mesh
        key={keyColorPair.key}
        position={[
          xStartCoordinate,
          yzStartCoordinate[0],
          yzStartCoordinate[1],
        ]}
      >
        <sphereGeometry />
        <meshPhongMaterial color={keyColorPair.color} transparent={false} />
      </mesh>
    );
    xStartCoordinate += spacing;

    return mesh;
  });
});

// return <meshPhongMaterial color={hexCode} transparent={true} />;

export const ColorSpheres = () => {
  console.log("Pairs: ", numberedHexCodes);
  console.log("orderedMaterials: ", orderedMaterials);
  return <group>{orderedMaterials}</group>;
};
