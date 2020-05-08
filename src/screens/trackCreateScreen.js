import '../_mockLocation'
import React, { useContext, useState, useCallback } from "react";
import { withNavigationFocus } from 'react-navigation'
import useLocation from '../hooks/useLocation'
import { Text, Button, Input } from "react-native-elements";
import { StyleSheet } from "react-native";
import Spacer from "../components/Spacer";
import Map from "../components/Map";
import { Context as LocationContext } from '../context/LocationContext'
import TrackForm from '../components/trackForm';
import {FontAwesome} from '@expo/vector-icons'
const TrackCreateScreen = ({ isFocused }) => {
  const { state, addLocation } = useContext(LocationContext);
  const [trackName, setTrackName] = useState("");
  const callback = useCallback((location) => {
    addLocation(location, state.recording)
  }, [state.recording])
  const [err] = useLocation(isFocused || state.recording, callback)
  return (
    // Decorator pattern
    // wrap multiple component inside another component(Parent and child components)
    <>
      <Text style={styles.text}>Create your Track</Text>
      <Spacer />
      <Map />
      {err ? <Text>Please turn on your location</Text> : null}
      <TrackForm />
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
TrackCreateScreen.navigationOptions = {
  title: 'Add Track',
  tabBarIcon:<FontAwesome name="plus" size={20}/>
}
export default withNavigationFocus(TrackCreateScreen);
