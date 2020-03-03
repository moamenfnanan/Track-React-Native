import React from "react";
import { Text } from "react-native-elements";
import { StyleSheet } from "react-native";
import MapView from 'react-native-maps'
const TrackDetailScreen = () => {
  return (
    <>
      <Text>TrackDetailScreen</Text>
      <MapView 
        style={styles.MapView}
      />
    </>
  )
};
const styles = StyleSheet.create({
  MapView:{
    height:"100%",
    width:'100%'
  }
});
export default TrackDetailScreen;
