import { View, Text, StatusBar, Image, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import ScreenBackground from "../../components/screenBackground/screenBackground";
import LottieView from "lottie-react-native";
import { map } from "../../constants/preloadImages";
import { Colors } from "../../constants";
import { screenHeight, screenWidth } from "../../constants/screenDimensions";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AnimatedLogo from "../../components/splashSplash/AppLogoAnimation";
import { AnimatePresence, MotiView } from "moti";
import DetailInputComponent from "../../components/Auth/DetailTextInput";
import LoginForm from "../../components/Auth/LoginForm";

export default function SplashScreen() {
  const [appReady, setAppReady] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  console.log(loading);
  console.log("appready", appReady);

  useEffect(() => {
    checkAppReady();
  });

  useEffect(() => {
    const doSomething = () => {
      const timeOut = setTimeout(() => {
        setAppReady(true);
        setLoading(false);
      }, 7000);
      () => clearTimeout(timeOut);
    };

    doSomething();
  }, []);

  const checkAppReady = () => {
    const timeOut = setTimeout(() => {
      setLoading(true);
    }, 4000);
    () => clearTimeout(timeOut);
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.PRIMARY_BACKGROUND_COLOR }}>
      <StatusBar barStyle={"light-content"} />
      <Image style={{ opacity: 0.05, position: "absolute" }} source={map} />
      <Image
        style={{ opacity: 0.05, position: "absolute", bottom: -150 }}
        source={map}
      />
      <AnimatedLogo appReady={appReady} />
      {loading && (
        <ActivityIndicator
          color={Colors.PRIMARY_WHITE_SHADOW_COLOR}
          style={{ position: "absolute", bottom: 100, alignSelf: "center" }}
          size={"large"}
        />
      )}
      {appReady && (
        <AnimatePresence>
          <View style={{ marginTop: 270,}}>
            <LoginForm email="psalishol" />
          </View>
        </AnimatePresence>
      )}
    </View>
  );
}


