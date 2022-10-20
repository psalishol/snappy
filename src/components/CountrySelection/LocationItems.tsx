import { View } from "react-native";
import Animated, { interpolate, Extrapolation } from "react-native-reanimated";

interface LocationItemProps {
  color: string;
  index: number;
  size: number;
  scrollX: number;
}

export default function LocationItem({
  color,
  size,
  index,
  scrollX,
}: LocationItemProps) {
  const ITEM_SIZE = size;
  const inputRange = [
    (index - 4) * ITEM_SIZE,
    (index - 3) * ITEM_SIZE,
    (index - 2) * ITEM_SIZE,
  ];
  const outputRange = interpolate(
    scrollX,
    inputRange,
    [0.6, 0.8, 0.6],
    Extrapolation.CLAMP
  );
  return (
    <View style={{ alignItems: "center" }}>
      <Animated.View
        style={{
          height: ITEM_SIZE,
          width: ITEM_SIZE,
          backgroundColor: color,
          borderRadius: ITEM_SIZE / 2,
          transform: [{ scale: outputRange }],
        }}
      ></Animated.View>
      <Animated.View
        style={{
          height: ITEM_SIZE,
          width: ITEM_SIZE,
          borderRadius: ITEM_SIZE / 2,
          borderWidth: 3,
          borderColor: "grey",
          position: "absolute",
          opacity: interpolate(scrollX, inputRange, [0, 1, 0]),
        }}
      />
      <Animated.Text
        style={{
          color: "blue",
          fontSize: 14,
          fontWeight: "bold",
          marginTop: 10,
          opacity: interpolate(scrollX, inputRange, [0, 1, 0]),
        }}
      >
        {color}
      </Animated.Text>
    </View>
  );
}
