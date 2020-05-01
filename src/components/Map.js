import React, { useContext } from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from '../context/LocationContext'
// facde pattren
// the face is nice to use and to look but the code is complix here
const Map = () => {
  const { state: { currentLocation, locations } } = useContext(LocationContext);
  if (!currentLocation) {
    return <ActivityIndicator size='large' style={{ marginTop: 200 }} />
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
        latitudeDelta: 0.007,
        longitudeDelta: 0.007
      }}
    >
      <Circle
        center={currentLocation.coords}
        radius={15}
        strokeColor="blue"
        fillColor="rgba(158,158,255,0.3)"
      />
      <Polyline coordinates={locations.map(loc => loc.coords)} />
    </MapView>
  );

};
const styles = StyleSheet.create({
  Map: {
    height: 300
  }
});
export default Map;
