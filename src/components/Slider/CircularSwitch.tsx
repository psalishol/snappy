import { Colors } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, StyleSheet } from "react-native";

interface CircularSwitchButtonProps {
  onPress: () => void;
//   status: ConnectionStatus;
}

const CircularSwitchButton = (props: CircularSwitchButtonProps) => {
  const { onPress } = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Ionicons name="md-power-sharp" size={30} color="white" />
    </TouchableOpacity>
  );
};

export default CircularSwitchButton;

const styles = StyleSheet.create({
  container: {
    height: 55,
    width: 55,
    backgroundColor: Colors.PRIMARY_HIGHLIGHT_COLOR,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
    marginTop: 25,
  },
});
