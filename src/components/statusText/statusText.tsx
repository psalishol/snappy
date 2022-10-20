import { Text } from "react-native";
import { Colors } from "../../constants";

export default function StatusText() {
  return (
    <Text
      style={{
        color: Colors.YELLO,
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
      }}
    >
      Connecting...
    </Text>
  );
}
