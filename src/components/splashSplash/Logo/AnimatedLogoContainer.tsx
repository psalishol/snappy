import { View, StyleSheet } from "react-native";
import React from "react";
import { MotiView } from "moti";
import AnimatedSpacer from "./AnimatedSpacer";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "../../../constants";

export default function AnimatedLogoContainer() {
  return (
    <MotiView
      from={{ scale: 0, translateX: -10 }}
      animate={{
        scale: [{ value: 1.2, type: "timing", duration: 1000 }],
        translateX: [
          { value: 50, type: "timing", duration: 1000, delay: 1200 },
        ],
      }}
      transition={{ damping: 20 }}
      style={styles.logo}
    >
      <AnimatedSpacer />
      <View style={styles.logoContainer}>
        <MaterialIcons name="security" size={26} color="white" />
      </View>
    </MotiView>
  );
}


const styles = StyleSheet.create({
  logoContainer: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: Colors.PRIMARY_HIGHLIGHT_COLOR,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    flexDirection: "row",
    zIndex: 1,
    marginLeft: -60,
    backgroundColor: Colors.PRIMARY_BACKGROUND_COLOR,
    width: 120,
  },
});
