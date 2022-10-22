// import { Auth } from "aws-amplify";
import { Formik } from "formik";
import { MotiView } from "moti";
import { Dispatch, SetStateAction, useState } from "react";
import { KeyboardAvoidingView, ScrollView } from "react-native";
import * as yup from "yup";
import { isAndroid } from "../../constants/platform";
import AnimatedWelcomeBack from "./AnimatedAuthHeader";
import AuthButton from "./AuthButton";
import DetailInputComponent from "./DetailTextInput";
import SwitchAuthentication from "./SwitchAuthentication";

type LoginFormProps = {
  setLoading?: Dispatch<SetStateAction<boolean>>;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
};

export default function SignUpForm(props: LoginFormProps) {
  const { setCurrentIndex, setLoading } = props;
  const [focused, setFocused] = useState<boolean>(false);
  const [emailFocused, setEmailFocused] = useState<boolean>(false);
  const [nameFocused, setNameFocused] = useState<boolean>(false);
  const [passwordObscured, setPasswordObscured] = useState<boolean>(true);

  const passwordValidation = yup.object().shape({
    name: yup.string().required("email is required"),
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
      initialValues={{ email: "", password: "", name: "" }}
      validationSchema={passwordValidation}
      validateOnChange={true}
      onSubmit={({ email, password }) => onSubmit(email, password)}
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
            style={{ marginTop: -50 }}
          >
            <KeyboardAvoidingView behavior={isAndroid ? "height" : "padding"}>
              <ScrollView>
                <AnimatedWelcomeBack
                  subHeaderIndex={1}
                  header="Lets Get Started"
                />
                <DetailInputComponent
                  error={errors.name}
                  value={values.name}
                  handleReset={handleReset}
                  handleBlur={handleBlur("name")}
                  placeholder={"Name"}
                  inputTitle={"Name"}
                  handleChange={handleChange("name")}
                  focused={nameFocused}
                  passwordComponent={false}
                  setFocused={setNameFocused}
                />
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
                  text="Sign Up"
                  onPress={handleSubmit}
                />
                <SwitchAuthentication
                  index={1}
                  setCurrentIndex={setCurrentIndex}
                />
              </ScrollView>
            </KeyboardAvoidingView>
          </MotiView>
        );
      }}
    </Formik>
  );
}
