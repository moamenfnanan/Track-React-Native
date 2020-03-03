import React, { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationEvents } from "react-navigation";
import Form from "../components/Form";
import { Context as AuthContext } from "../context/AuthContext";
// import NavLink from '../components/navLink'
const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(
    AuthContext
  );
  return (
    <>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <Form
        title="sign up"
        state={state.errorMessage}
        onClick={signup}
        onClickText="signup"
        haveAccount="Already have account!"
        haveAccountPress={() => navigation.navigate("login")}
      />
    </>
  );
};
SignupScreen.navigationOptions = () => {
  return {
    header: null
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200
  }
});
export default SignupScreen;
