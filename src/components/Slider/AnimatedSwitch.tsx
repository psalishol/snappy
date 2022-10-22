import React, { useState, useEffect, useCallback } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import {
  Gesture,
  GestureHandlerRootView,
  GestureDetector,
} from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  interpolateColor,
} from "react-native-reanimated";
import { Colors } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import CircularSwitchButton from "./CircularSwitch";

const AnimatedSwitch = () => {
  const [scrollDown, setScrollDown] = useState(false);

  const translationY = useSharedValue(0);

  const gesture = Gesture.Pan()
    .onUpdate((event) => {
      console.log(event.translationY);
      if (event.translationX > 0 && event.translationY < 110) {
        translationY.value = event.translationY;
      }
    })
    .onEnd((event) => {
      // console.log(event.translationY);
      if (event.translationY < 30) {
        translationY.value = withSpring(0, { damping: 300 });
      }
      if (event.translationY > 30) {
        translationY.value = withSpring(110, { damping: 300 });
      }
    });

  const translateStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translationY.value }],
    };
  }, []);

  useEffect(() => {
    translationY.value = withSpring(scrollDown ? 110 : 0, { damping: 300 });
  }, [scrollDown]);

  const handleSwitch = useCallback(() => {
    setScrollDown((prev) => !prev);
  }, []);

  console.log(translationY.value);
  const indicatorColor = Colors.GREEN;
  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={gesture}>
        <Animated.View
          style={[
            translateStyle,
            { transform: [{ translateY: translationY.value }] },
          ]}
        >
          <LinearGradient
            style={{
              height: 150,
              width: 100,
              backgroundColor: Colors.PRIMARY_HIGHLIGHT_COLOR,
              marginTop: 15,
              borderRadius: 100,
              zIndex: 1,
              alignItems: "center",
            }}
            colors={[
              Colors.PRIMARY_SHADOW_COLOR,
              Colors.PRIMARY_HIGHLIGHT_COLOR,
            ]}
          >
            <View
              style={{
                height: 5,
                width: 15,
                borderRadius: 12,
                backgroundColor: indicatorColor,
                marginBottom: 20,
                marginTop: 15,
              }}
            />
            <Text style={{ color: "white", fontSize: 14, fontWeight: "bold" }}>
              Start
            </Text>
            <CircularSwitchButton onPress={handleSwitch} />
          </LinearGradient>
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

export default AnimatedSwitch;
