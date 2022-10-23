import { Colors } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useContext } from "react";
import { ConnectionStatusContext } from "../../Global/ConnectionStatusContext";
import { size } from "../../utils/dimensionGetter";
interface CircularSwitchButtonProps {
  onPress: () => void;
  //   status: ConnectionStatus;
}

const CircularSwitchButton = (props: CircularSwitchButtonProps) => {
  const { onPress } = props;

  const { connectionStatus } = useContext(ConnectionStatusContext);

  const isConnected = connectionStatus === "Connected";
  const isDisconnected = connectionStatus === "Disconnected";
  const isConnecting = connectionStatus === "Connecting";
  const isDisconnecting = connectionStatus === "Disconnecting";

  const connectionStatusColor = isDisconnected
    ? Colors.WHITE
    : isConnected
    ? Colors.GREEN
    : Colors.YELLO;
  const disablebButton = isConnecting || isDisconnecting;

  return (
    <TouchableOpacity
      disabled={disablebButton}
      onPress={onPress}
      style={styles.container}
    >
      <Ionicons
        name="md-power-sharp"
        size={size(30)}
        color={connectionStatusColor}
      />
    </TouchableOpacity>
  );
};

export default CircularSwitchButton;

const styles = StyleSheet.create({
  container: {
    height: size(55),
    width: size(55),
    backgroundColor: Colors.PRIMARY_HIGHLIGHT_COLOR,
    borderRadius: size(60),
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
    marginTop: size(25),
  },
});
