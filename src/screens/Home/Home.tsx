import { StyleSheet } from "react-native";
import React, { useContext } from "react";
import { Colors, isAndroid } from "../../constants";
import Slider from "../../components/Slider/Slider";
import CountrySelection from "../../components/CountrySelection/CountrySelection";
import RenderConnectionStatus from "../../components/connectionDisplay/RenderConnectionStatus";
import ChooseLocation from "../../components/chooseLocation/chooseLocation";
import Header from "../../components/Header/homeHeader";
import ScreenBackground from "../../components/screenBackground/screenBackground";
import StatusText from "../../components/statusText/statusText";
import { ConnectionStatusContext } from "../../Global/ConnectionStatusContext";
import { AnimatePresence, MotiView } from "moti";
import ConnectedTimeAndSpeed from "../../components/ConnectedTimeSpeed/ConnectedTimeAndSpeed";
import { DrawerContext } from "../../Global/DrawerContext";
import { Drawer } from "../../components/Drawer/Drawer";
import * as NavigationBar from "expo-navigation-bar";
import ChosenServerIP from "../../components/chosenServerIp/ChosenServerIp";

export default function Home() {
  const { connectionStatus } = useContext(ConnectionStatusContext);
  const { state } = useContext(DrawerContext);

  const drawerOpened = state === "Open";
  const isConnected = connectionStatus === "Connected";
  const isDisconnected = connectionStatus === "Disconnected";

  const connectionStatusColor = isDisconnected
    ? Colors.WHITE
    : isConnected
    ? Colors.GREEN
    : Colors.YELLO;

  isAndroid &&
    NavigationBar.setBackgroundColorAsync(Colors.PRIMARY_HIGHLIGHT_COLOR);

  return (
    <ScreenBackground>
      <Header />
      <AnimatePresence>
        <MotiView
          from={{ opacity: 1 }}
          animate={{ opacity: isConnected ? 0 : 1 }}
        >
          <CountrySelection />
        </MotiView>
      </AnimatePresence>
      <RenderConnectionStatus
        connectionStatus={connectionStatus}
        color={connectionStatusColor}
      />
      {isConnected && (
        <MotiView
          from={{ opacity: 0 }}
          animate={{ opacity: isConnected ? 1 : 0 }}
          style={styles.overlay}
        />
      )}
      {isConnected && (
        <MotiView from={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <ChosenServerIP />
        </MotiView>
      )}
      {isConnected && <ConnectedTimeAndSpeed />}
      <StatusText />
      <MotiView
        animate={{ opacity: isConnected ? 0 : 1 }}
        from={{ opacity: 1 }}
      >
        <ChooseLocation />
      </MotiView>
      <Slider />
      {drawerOpened && (
        <AnimatePresence>
          <Drawer />
        </AnimatePresence>
      )}
    </ScreenBackground>
  );
}


const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(19, 252, 46, 0.065)",
  },
});
