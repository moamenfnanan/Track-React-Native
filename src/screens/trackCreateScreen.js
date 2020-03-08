import '../_mockLocation'
import React, {useContext ,useState} from "react";
import useLocation from '../hooks/useLocation'
import { Text, Button, Input } from "react-native-elements";
import { StyleSheet } from "react-native";
import Spacer from "../components/Spacer";
import Map from "../components/Map";
import {Context as LocationContext}from '../context/LocationContext'
const TrackCreateScreen = () => {
  const  {addLocation} = useContext(LocationContext);
  const [trackName, setTrackName] = useState("");
  const [err] = useLocation(addLocation)
  return (
    <>
      <Text style={styles.text}>Create your Track</Text>
      <Spacer />
      <Map />
      <Input
        label="track name"
        placeholder="enter your track name"
        value={trackName}
        onChangeText={setTrackName}
      />
      <Button
        title="create track"
        containerStyle={{ width: "100%", marginTop: 50 }}
      />
      {err ? <Text>Please turn on your location</Text> : null}
      <Text>{trackName}</Text>
    </>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    marginTop: 50
  },
  map: {
    height: 200,
    width: "100%"
  },
  Button: {
    marginTop: 100
  }
});
export default TrackCreateScreen;
