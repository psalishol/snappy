import { MotiView } from "moti";
import { View } from "react-native";
import { Colors } from "../../constants";

const AnimatedDot = () => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {[...Array(3).keys()].map((_, i) => {
        return (
          <MotiView
            key={i}
            from={{ translateX: 0 }}
            animate={{ translateX: i + 1 * 7 }}
            transition={{
              loop: true,
              duration: 700,
              delay: i * 700,
              damping: 300,
              repeatReverse: false,
            }}
            style={{
              height: 7,
              width: 7,
              borderRadius: 10,
              backgroundColor: Colors.YELLO,
            }}
          />
        );
      })}
    </View>
  );
};

export default AnimatedDot;
