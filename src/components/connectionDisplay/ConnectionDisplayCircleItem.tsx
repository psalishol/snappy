import { View, Text, Dimensions } from "react-native";
import React from "react";
import { Colors } from "../../constants";

const { width, height } = Dimensions.get("window");

interface ConnectionDisplayCircleItemProps {
  offset: number;
  color?: string;
}

export default function ConnectionDisplayCircleItem({
  offset,
  color = Colors.PRIMARY_SHADOW_COLOR,
}: ConnectionDisplayCircleItemProps) {
  const N = 42;
  const R = (width - offset) / 2;
  const a = Math.sin(Math.PI / N);
  const r = (R * a) / (1 - a);

  const cy = R - r;
  const cx = width / 2 - r;
  return (
    <View
      style={{
        height: R * 2,
        width: R * 2,
        borderRadius: R,
        position: "absolute",
        top: 620,
        marginLeft: 5,
      }}
    >
      {[...Array(N).keys()].map((_, i) => {
        return (
          <View
            key={i}
            style={{
              height: r,
              width: r,
              backgroundColor: color,
              position: "absolute",
              borderRadius: r,
              transform: [
                { translateX: cx },
                { rotate: `${i * ((2.8 * Math.PI) / N)}rad` },
                { translateY: cy },
                // {translateX: 300}
              ],
              opacity: (i + 10) / N,
            }}
          ></View>
        );
      })}
    </View>
  );
}
