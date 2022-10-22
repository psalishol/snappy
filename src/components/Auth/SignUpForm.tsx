// import { Auth } from "aws-amplify";
import { Formik } from "formik";
import { MotiText, MotiView } from "moti";
import { Dispatch, SetStateAction, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Easing } from "react-native-reanimated";
// import { RoundedButton } from "../../GlobalComponents";
// import DetailInputComponent from "../DetailInputComponent/DetailInputComponent";
// import ForgotPassword from "../ForgotPassword";
import * as yup from "yup";
import { Colors } from "../../constants";
import { isAndroid } from "../../constants/platform";
import AnimatedWelcomeBack from "./AnimatedAuthHeader";
import AuthButton from "./AuthButton";
import DetailInputComponent from "./DetailTextInput";
// import AsyncStorage from "@react-native-async-storage/async-storage";

type LoginFormProps = {
  email: string;
  setLoading?: Dispatch<SetStateAction<boolean>>;
};

export default function LoginForm(props: LoginFormProps) {
  const { email, setLoading } = props;
  const [focused, setFocused] = useState<boolean>(false);
  const [emailFocused, setEmailFocused] = useState<boolean>(false);
  const [passwordObscured, setPasswordObscured] = useState<boolean>(true);

  const passwordValidation = yup.object().shape({
    password: yup.string().required("Password is required"),
    email: yup.string().required("email is required"),
  });
  //   const onUserLogin = async ({ password }: { password: string }) => {
  //     setLoading(true);
  //     try {
  //       const response = await Auth.signIn(email, password);
  //       console.log(response);
  //       if (response) {
  //         AsyncStorage.setItem("currentAuthUser", JSON.stringify(response));
  //       }
  //       setLoading(false);
  //     } catch (e) {
  //       setLoading(false);
  //       console.log(e);
  //     }
  //   };

  const onSubmit = (email: string, password: string) => {
    console.log(email, password);
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={passwordValidation}
      validateOnChange={true}
      onSubmit={({ email, password }) => onSubmit(email, password)}
      //   onSubmit={onUserLogin}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        handleReset,
        values,
        errors,
        isValid,
      }) => {
        return (
          <MotiView
            from={{ opacity: 0, translateY: 500 }}
            animate={{
              opacity: [{ value: 1, delay: 100 }],
              translateY: [{ value: 1, damping: 300 }],
            }}
          >
            <KeyboardAvoidingView behavior={isAndroid ? "height" : "padding"}>
              <ScrollView>
                <AnimatedWelcomeBack subHeaderIndex={1} header="Lets Get Started" />
                <DetailInputComponent
                  error={errors.email}
                  value={values.email}
                  handleReset={handleReset}
                  handleBlur={handleBlur("email")}
                  placeholder={"Email"}
                  inputTitle={"Email"}
                  handleChange={handleChange("email")}
                  focused={emailFocused}
                  passwordComponent={false}
                  setFocused={setEmailFocused}
                />
                <DetailInputComponent
                  error={errors.password}
                  value={values.password}
                  handleReset={handleReset}
                  handleBlur={handleBlur("password")}
                  placeholder={"Password"}
                  inputTitle={"your Password"}
                  handleChange={handleChange("password")}
                  focused={focused}
                  passwordComponent={true}
                  setFocused={setFocused}
                  obscured={passwordObscured}
                  setObscured={setPasswordObscured}
                />
                <AuthButton
                  disabled={!isValid}
                  text="Login"
                  onPress={handleSubmit}
                />
              </ScrollView>
            </KeyboardAvoidingView>
          </MotiView>
        );
      }}
    </Formik>
  );
}
