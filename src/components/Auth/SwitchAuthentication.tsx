import { Dispatch, SetStateAction } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants";
import { size } from "../../utils/dimensionGetter";

interface SwitchAuthenticationProps {
  index: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}

const SwitchAuthentication = (props: SwitchAuthenticationProps) => {
  const { index, setCurrentIndex } = props;
  const text = ["Don't have an account?", "Already have an account?"];
  const action = ["Sign Up", "Sign In"];
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text[index]}</Text>
      <TouchableOpacity onPress={() => setCurrentIndex(index === 0 ? 1 : 0)}>
        <Text style={[styles.text, { color: Colors.GREEN }]}>
          {" " + action[index]}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SwitchAuthentication;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Colors.PRIMARY_WHITE_SHADOW_COLOR,
    fontWeight: "bold",
    fontSize: size(12),
  },
});
