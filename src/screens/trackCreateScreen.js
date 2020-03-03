import React, { useState, useEffect } from "react";
import { Text, Button, Input } from "react-native-elements";
import { StyleSheet } from "react-native";
import Spacer from "../components/Spacer";
import Map from "../components/Map";
import { requestPermissionsAsync } from "expo-location";
const TrackCreateScreen = () => {
  const [trackName, setTrackName] = useState("");
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
    } catch (err) {
      setErr(err);
    }
  };
  useEffect(() => {
    startWatching();
  }, []);
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
