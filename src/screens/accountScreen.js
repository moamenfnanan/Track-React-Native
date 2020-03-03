import React, { useContext } from "react";
import { Text, Button } from "react-native-elements";
import { StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
const AccountScreen = ({ navigation }) => {
  const { signout } = useContext(AuthContext);
  return (
    <>
      <Text style={styles.text}>Account Screen</Text>
      <Button
        title="Log out"
        containerStyle={{ marginTop: 50 }}
        onPress={signout}
      />
    </>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    marginTop: 50
  }
});
export default AccountScreen;
