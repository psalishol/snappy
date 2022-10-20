import React from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants";
import { dashboard, goPremium } from "../../constants/preloadImages";

const Header = () => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <TouchableOpacity style={styles.homeContainer}>
        <Image style={{ height: 20, width: 20 }} source={dashboard} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.goPremiumContainer}>
        <Image style={styles.logo} source={goPremium} />
        <Text style={styles.text}>Go Premium</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  homeContainer: {
    borderRadius: 15,
    borderWidth: 1,
    height: 40,
    width: 40,
    margin: 20,
    borderColor: Colors.PRIMARY_WHITE_SHADOW_COLOR,
    justifyContent: "center",
    alignItems: "center",
  },
  goPremiumContainer: {
    marginLeft: "auto",
    padding: 10,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.2)",
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  logo: { height: 15, width: 15, marginRight: 10 },
  text: { color: "white", fontSize: 12, fontWeight: "bold" },
});
