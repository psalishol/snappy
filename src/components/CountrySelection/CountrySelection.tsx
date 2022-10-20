import {
  NativeSyntheticEvent,
  NativeScrollEvent,
  FlatList,
} from "react-native";
import React, { useRef, useState } from "react";
import { runOnJS } from "react-native-reanimated";
import {
  GestureDetector,
  GestureHandlerRootView,
  Gesture,
} from "react-native-gesture-handler";
import { Dimensions } from "react-native";
import LocationItem from "./LocationItems";

const { width, height } = Dimensions.get("window");

const tempData = [
  "green",
  "red",
  "yellow",
  "cyan",
  "grey",
  "purple",
  "pink",
  "blue",
  "magenta",
  "orange",
  "black",
  "tomato",
];

export default function CountrySelection() {
  const [data, setData] = useState<any[]>(tempData);
  const [scrollX, setScrollX] = useState<number>(0);

  const CONTAINER_SIZE = width / 7;
  function onScrollEnd(event: NativeSyntheticEvent<NativeScrollEvent>) {
    console.log(event);
  }

  // const [tranlateValue, setTranlateValue] = useState<number>(0);
  // const [scrollCtx, setScrollCtx] = useState<number>(0);
  // const translationX = useSharedValue(0);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [scrollingLeft, setScrollingLeft] = useState<boolean>(false);

  const DATA_SIZE = data.length;

  // console.log("scrolling left", scrollingLeft);
  // console.log("index", currentIndex);

  const flatlistRef = useRef<FlatList>(null);

  const scrollToIndex = (index: number, left: boolean) => {
    // console.log("scrollToIndex", index);
    if (left) setCurrentIndex(index - 1);
    if (!left) setCurrentIndex(index + 1);
    return flatlistRef.current?.scrollToIndex({
      animated: true,
      index: left ? index - 1 : index + 1,
    });
  };

  const shiftAndAppend = (data: any[]) => {
    // console.log(data);
    const currentData = data;
    const shiftedElement = currentData.shift();
    setData([...data, shiftedElement]);
    scrollToIndex(0, false);
  };

  const popAndUnshift = (data: any[]) => {
    const currentData = data;
    const poppedElement = currentData.pop();
    // return data.unshift(poppedElement);
    return [poppedElement, ...currentData];
  };

  const setDirection = (left: boolean) => {
    if (!left) return setScrollingLeft(true);
    if (left) return setScrollingLeft(false);
  };

  const getScrollDirection = (translationX: number) => {
    "worklet";
    // console.log("translationX", Math.sign(translationX));
    if (Math.sign(translationX) === 1) return runOnJS(setDirection)(false);
    if (Math.sign(translationX) === -1) return runOnJS(setDirection)(true);
  };

  const gesture = Gesture.Pan()
    .onUpdate((event) => {
      getScrollDirection(event.translationX);
    })
    .onEnd((event) => {
      // console.log("tranlation finished value", event.translationX);
      // if (scrollingLeft) runOnJS(popAndUnshift)(data);
      // if (!scrollingLeft) runOnJS(shiftAndAppend)(data);
      if (scrollingLeft) runOnJS(scrollToIndex)(currentIndex, true);
      if (!scrollingLeft) runOnJS(scrollToIndex)(currentIndex, false);
      // runOnJS(manipulateData)(currentIndex, data);
    });
  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={gesture}>
        <FlatList
          bounces={false}
          horizontal
          style={{ marginTop: 100 }}
          data={data}
          // extraData={data}
          ref={flatlistRef}
          onEndReached={() => {
            console.log("onEndReached");
          }}
          scrollEventThrottle={16}
          scrollEnabled={false}
          onScroll={(event) => setScrollX(event.nativeEvent.contentOffset.x)}
          snapToInterval={CONTAINER_SIZE}
          renderItem={({ item, index }) => {
            return (
              <LocationItem
                scrollX={scrollX}
                index={index}
                size={CONTAINER_SIZE}
                color={item}
              />
            );
          }}
        />
      </GestureDetector>
    </GestureHandlerRootView>
  );
}
