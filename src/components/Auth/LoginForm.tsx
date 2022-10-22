import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { MotiView } from "moti";
import { Dispatch, SetStateAction, useState } from "react";
import { KeyboardAvoidingView, ScrollView } from "react-native";

import * as yup from "yup";
import { isAndroid, isIos } from "../../constants/platform";
import AnimatedAuthHeader from "./AnimatedAuthHeader";
import AuthButton from "./AuthButton";
import DetailInputComponent from "./DetailTextInput";
import SwitchAuthentication from "./SwitchAuthentication";

type LoginFormProps = {
  setLoading?: Dispatch<SetStateAction<boolean>>;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
};

export default function LoginForm(props: LoginFormProps) {
  const { setLoading, setCurrentIndex } = props;
  const [focused, setFocused] = useState<boolean>(false);
  const [emailFocused, setEmailFocused] = useState<boolean>(false);
  const [passwordObscured, setPasswordObscured] = useState<boolean>(true);
  const navigation = useNavigation();
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
    navigation.navigate("Home");
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
            <KeyboardAvoidingView
              keyboardVerticalOffset={isIos ? -40 : 0}
              behavior={isAndroid ? "height" : "padding"}
            >
              <ScrollView>
                <AnimatedAuthHeader subHeaderIndex={0} header="Welcome Back" />
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
                  onPress={() => handleSubmit()}
                />
                <SwitchAuthentication
                  setCurrentIndex={setCurrentIndex}
                  index={0}
                />
              </ScrollView>
            </KeyboardAvoidingView>
          </MotiView>
        );
      }}
    </Formik>
  );
}
