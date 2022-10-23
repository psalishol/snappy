import { ReactNode, useState, useEffect, Children } from "react";
import { View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { screenWidth } from "../../constants/screenDimensions";
import { size } from "../../utils/dimensionGetter";

interface AuthScrollViewProps {
  index: number;
  children: ReactNode;
}

const AuthScrollView = ({ index, children }: AuthScrollViewProps) => {
  const viewDimension = screenWidth * 2;
  const translation = useSharedValue(0);

  const translationX = useAnimatedStyle(() => {
    return { transform: [{ translateX: translation.value }] };
  });

  useEffect(() => {
    translation.value = withSpring(index === 0 ? 0 : -screenWidth, {
      damping: 300,
    });
  }, [index]);
  return (
    <Animated.View
      style={[
        { width: viewDimension, height: "100%", flexDirection: "row" },
        translationX,
      ]}
    >
      {Children.map(children, (child) => {
        return (
          <View style={{ width: screenWidth, marginTop: size(300) }}>
            {child}
          </View>
        );
      })}
    </Animated.View>
  );
};

export default AuthScrollView;
