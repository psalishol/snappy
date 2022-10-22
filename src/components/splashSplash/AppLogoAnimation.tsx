import React from "react";
import { StyleSheet } from "react-native";
import { screenHeight } from "../../constants/screenDimensions";

import { MotiView } from "moti";
import { AnimatedLogoContainer, LogoText } from "./Logo";

type AnimatedLogoProps = { appReady: boolean };

export default function AnimatedLogo({ appReady }: AnimatedLogoProps) {
  return (
    <MotiView
      from={{ translateY: 0, opacity: 1 }}
      animate={{ translateY: appReady ? -200 : 0, opacity: appReady ? 0 : 1 }}
      style={styles.container}
    >
      <LogoText />
      <AnimatedLogoContainer />
    </MotiView>
  );
}

const styles = StyleSheet.create({
  container: {
    top: screenHeight / 2 - 50,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    position: "absolute",
  },
});
