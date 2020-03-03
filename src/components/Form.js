import React,{useState} from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Text, Input, Button } from "react-native-elements";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Spacer from "../components/Spacer";
const Form = ({
  title,
  forgetPassword,
  onClick,
  state,
  haveAccount,
  haveAccountPress,
  onClickText
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Text h3 h3Style={styles.txt}>
        {title}
      </Text>
      <Input
        placeholder="enter your email"
        leftIcon={<Icon name="user" size={24} color="black" />}
        inputStyle={styles.input}
        value={email}
        onChangeText={(val)=>setEmail(val)}
      />
      <Spacer />
      <Input
        placeholder="enter your password"
        leftIcon={{ type: "font-awesome", name: "lock" }}
        secureTextEntry
        inputStyle={styles.input}
        value={password}
        onChangeText={(val)=>setPassword(val)}
      />
      {state?(<Text style={styles.errorMessage}>{state}</Text>):null}
      <Spacer />
      <Button title={onClickText} onPress={()=>onClick({email,password})}/>
      <View style={styles.TextNav}>
        <TouchableOpacity>
          {forgetPassword ? <Text style={styles.text}>{forgetPassword}</Text> : null}
        </TouchableOpacity>
        <TouchableOpacity onPress={haveAccountPress}>
          <Text style={styles.text}>{haveAccount}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200
  },
  input: {
    marginLeft: 10
  },
  text: {
    fontSize: 15,
    textAlign: "center",
    color: "#4388d6",
    marginTop: 5
  },
  txt: {
    marginLeft: 20,
    marginBottom: 20
  },
  TextNav: {
    marginTop: 20
  },
  errorMessage:{
    marginLeft:15,
    marginTop:15,
    color:'red',
    fontSize:15
  }
});
export default Form;
