import { MotiView } from "moti";
import { View, Platform, StatusBar, Image, StyleSheet } from "react-native";
import { Colors } from "../../constants";
import { map } from "../../constants/preloadImages";

interface ScreenBackgroundProps {
  children: React.ReactNode;
}

const ScreenBackground = ({ children }: ScreenBackgroundProps) => {
  const animateBackground = true;
  return (
    <>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={Colors.PRIMARY_BACKGROUND_COLOR}
      />
      <View style={styles.view}>
        <MotiView
          from={{ translateX: 0 }}
          animate={{
            translateX: [
              -5, -10, -15, -20, -25, -30, -35, -40, -45, -50, -55, -60, -65,
              -70, -75, -80, -85, -90, -95, -100, -105, -110, -115, -120, -125,
              -130, -135, -140, -145, -150, -155, -160, -165, -170, -175, -180,
              // -185, -190, -195, -200, -205, -210, -215, -220, -225, -230, -235,
              // -240, -245, -250,
            ],
          }}
          transition={{
            loop: animateBackground,
            repeatReverse: false,
            damping: 300,
          }}
        >
          <Image resizeMode="cover" style={styles.background} source={map} />
        </MotiView>
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
    width: 600,
    opacity: 0.1,
    transform: [{ translateX: -13 }],
  },
});

export default ScreenBackground;
