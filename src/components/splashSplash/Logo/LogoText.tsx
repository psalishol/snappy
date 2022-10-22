import { StyleSheet } from "react-native";
import React from "react";
import { MotiText } from "moti";
import { Colors } from "../../../constants";

export default function LogoText() {
  return (
    <MotiText
      from={{ opacity: 0, translateX: 70 }}
      animate={{
        opacity: [{ value: 1, type: "timing", delay: 1200 }],
        translateX: [
          { value: -10, type: "timing", duration: 1000, delay: 1500 },
        ],
      }}
      style={[styles.snappyText]}
    >
      SNAPPY
    </MotiText>
  );
}

const styles = StyleSheet.create({
  snappyText: {
    color: Colors.WHITE,
    fontSize: 30,
    fontWeight: "bold",
    marginRight: 10,
    fontFamily: "Inter_700Bold",
    zIndex: 0,
  },
});
