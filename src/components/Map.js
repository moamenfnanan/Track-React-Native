import * as Location from 'expo-location'
import React,{useContext} from "react";
import { StyleSheet,ActivityIndicator } from "react-native";
import MapView, { Polyline ,Circle} from "react-native-maps";
import {Context as LocationContext} from '../context/LocationContext'
const Map = () => {
  const {state:{currentLocation}} = useContext(LocationContext);
  console.log(currentLocation);
  
  if(!currentLocation){
    return <ActivityIndicator size='large' style={{marginTop:200}}/>
  }
  return (
    <MapView
      style={styles.Map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
      region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    >
      <Circle 
        center={currentLocation.coords}
        radius={15}
        strokeColor="blue"
        fillColor="rgba(158,158,255,0.3)"
      />
    </MapView>
  );

};
const styles = StyleSheet.create({
  Map: {
    height: 300
  }
});
export default Map;
