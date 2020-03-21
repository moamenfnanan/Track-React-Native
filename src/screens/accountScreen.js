import React, { useContext } from "react";
import { Text, Button } from "react-native-elements";
import { StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import {FontAwesome} from '@expo/vector-icons'
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

AccountScreen.navigationOptions = {
  title: 'Account',
  tabBarIcon:<FontAwesome name="gear" size={20}/>
}
export default AccountScreen;
