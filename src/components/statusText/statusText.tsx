import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants";
import { MotiView } from "moti";
import AnimatedDot from "./AnimatedConnectingDot";
import { ConnectionStatusContext } from "../../Global/ConnectionStatusContext";

export default function StatusText() {
  const { connectionStatus } = useContext(ConnectionStatusContext);
  const displayText =
    connectionStatus === "Disconnected"
      ? "Not Connected"
      : connectionStatus === "Connecting"
      ? "Connecting"
      : "Connected";
  const color = connectionStatus === "Connecting" ? Colors.YELLO : "white";
  const showLoading = connectionStatus === "Connecting" ? true : false;
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <Text style={[styles.text, { color }]}>{displayText}</Text>
      {showLoading && <AnimatedDot />}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
