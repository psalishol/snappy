import { View, Platform, StatusBar, Image, StyleSheet } from "react-native";
import { Colors } from "../../constants";
import { map } from "../../constants/preloadImages";

interface ScreenBackgroundProps {
  children: React.ReactNode;
}

const ScreenBackground = ({ children }: ScreenBackgroundProps) => {
  // const offsetAngle = Math.PI / N;
  return (
    <>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={Colors.PRIMARY_BACKGROUND_COLOR}
      />
      <View style={styles.view}>
        <Image style={styles.background} source={map} />
        {children}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND_COLOR,
    paddingTop: Platform.OS === "ios" ? 30 : 0,
  },
  background: {
    position: "absolute",
    top: 200,
    right: 0,
    left: 0,
    height: 300,
    width: "100%",
    opacity: 0.1,
  },
});

export default ScreenBackground;
