import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { Colors } from "../../constants";

export type DetailInputComponentProps = {
  inputValue?: string;
  value: string;
  handleChange: any;
  handleBlur?: {
    (e: React.FocusEvent<any, Element>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  inputTitle: string;
  focused: boolean;
  passwordComponent: boolean;
  placeholder: string;
  setFocused: React.Dispatch<React.SetStateAction<boolean>>;
  obscured?: boolean;
  setObscured?: React.Dispatch<React.SetStateAction<boolean>>;
  error?: string;
  handleReset?: (e?: React.SyntheticEvent<any, Event> | undefined) => void;
};

const DetailInputComponent = (props: DetailInputComponentProps) => {
  const onBlur = () => {
    props.handleBlur;
    props.setFocused(false);
  };

  const handleReset = () => {};

  return (
    <View style={{ marginTop: 25 }}>
      <View>
        <Text style={styles(props.focused).title}>
          {props.inputTitle.toUpperCase()}
        </Text>
      </View>

      <View style={styles(props.focused).inputContainer}>
        <TextInput
          selectionColor={"white"}
          value={props.value}
          secureTextEntry={props.passwordComponent ? props.obscured : false}
          onChangeText={props.handleChange}
          keyboardAppearance="dark"
          placeholderTextColor={Colors.PRIMARY_HIGHLIGHT_COLOR}
          placeholder={props.placeholder}
          onFocus={() => props.setFocused(true)}
          onBlur={onBlur}
          style={styles(props.focused).input}
        />

        {!props.passwordComponent ? (
          props.value ? (
            <TouchableOpacity>
              <MaterialIcons name="cancel" size={24} color="#252932" />
            </TouchableOpacity>
          ) : null
        ) : (
          <TouchableOpacity onPress={() => props.setObscured!(!props.obscured)}>
            <AntDesign name="eye" size={24} color="#252932" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
export default DetailInputComponent;

const styles = (focused: boolean) =>
  StyleSheet.create({
    title: {
      color: "#3A3C48",
      fontWeight: "bold",
      marginHorizontal: 20,
      fontSize: 12,
      marginBottom: 5,
    },
    input: {
      paddingVertical: 12,
      font: 16,
      fontWeight: "bold",
      color: "white",
      width: "90%",
    },
    inputContainer: {
      flexDirection: "row",
      borderBottomColor: focused ? "#BEF0B2" : "#3A3C48",
      borderBottomWidth: 2,
      marginHorizontal: 20,
      justifyContent: "space-between",
      alignItems: "center",
    },
  });
