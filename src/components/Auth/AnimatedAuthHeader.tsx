import { MotiText } from "moti";
import { View, StyleSheet } from "react-native";
import { Easing } from "react-native-reanimated";
import { Colors } from "../../constants";

interface AnimatedAuthHeaderProps {
  header: string;
  subHeaderIndex: number;
}

const AnimatedAuthHeader = ({ header,subHeaderIndex }: AnimatedAuthHeaderProps) => {
  const subHeader = [
    "Enter your authentication criteria to continue",
    "Kindly fill the form appropriately",
  ];
  return (
    <View>
      <MotiText style={styles.welcome}>{header}</MotiText>
      <MotiText
        from={{ opacity: 0, translateY: -10 }}
        animate={{
          opacity: 1,
          translateY: [
            {
              value: 0,
              type: "timing",
              duration: 1000,
              delay: 0,
              easing: Easing.linear,
            },
          ],
        }}
        style={styles.subText}
      >
        {subHeader[subHeaderIndex]}
      </MotiText>
    </View>
  );
};

export default AnimatedAuthHeader;

const styles = StyleSheet.create({
  welcome: {
    color: Colors.PRIMARY_WHITE_SHADOW_COLOR,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
  },
  subText: {
    color: Colors.PRIMARY_WHITE_SHADOW_COLOR,
    opacity: 0.6,
    fontSize: 12,
    marginLeft: 20,
    marginTop: 5,
  },
});
