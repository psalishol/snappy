import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../../constants";

interface AuthButtonProps {
  onPress?: () => void;
  text: string;
  disabled?: boolean;
}

export default function AuthButton(props: AuthButtonProps) {
  const { onPress, text, disabled = false } = props;
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.8}
      style={styles.container}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    margin: 20,
    marginTop: 40,
    borderRadius: 30,
    backgroundColor: Colors.PRIMARY_HIGHLIGHT_COLOR,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: Colors.PRIMARY_WHITE_SHADOW_COLOR,
    fontWeight: "bold",
    fontSize: 18,
  },
});
