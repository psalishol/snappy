import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Colors } from "../../constants";

export default function ChooseLocation() {
  return (
    <TouchableOpacity style={styles.container}>
      <Ionicons name="location-outline" size={20} color="white" />
      <Text style={{ color: "white" }}>Location</Text>
      <MaterialIcons name="keyboard-arrow-right" size={20} color="white" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: 150,
    borderRadius: 20,
    backgroundColor: Colors.PRIMARY_BACKGROUND_COLOR,
    alignSelf: "center",
    margin: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
