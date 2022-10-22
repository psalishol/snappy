import { StyleSheet } from "react-native";
import React from "react";
import { MotiView } from "moti";
import { Colors } from "../../../constants";

export default function AnimatedSpacer() {
  return (
    <MotiView
      from={{ opacity: 0 }}
      animate={{ opacity: [{ value: 1, delay: 1200 }] }}
      style={styles.spacer}
    />
  );
}

const styles = StyleSheet.create({
  spacer: {
    height: 50,
    width: 1,
    backgroundColor: Colors.PRIMARY_HIGHLIGHT_COLOR,
    marginRight: 10,
  },
});
