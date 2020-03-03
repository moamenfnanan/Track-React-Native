import React, { useContext, useEffect } from "react";
import { NavigationEvents } from "react-navigation";
import Form from "../components/Form";
// import NavLink from '../components/navLink';
import { Context } from "../context/AuthContext";
const LoginScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(
    Context
  );
  return (
    <>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <Form
        title="login"
        forgetPassword="forget password?"
        state={state.errorMessage}
        onClick={signin}
        onClickText="login"
        haveAccount="Dont have account!"
        haveAccountPress={() => navigation.navigate("signup")}
      />
    </>
  );
};
LoginScreen.navigationOptions = () => {
  return {
    header: null
  };
};
export default LoginScreen;
