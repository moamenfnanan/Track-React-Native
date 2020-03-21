import React, { useContext } from "react";
import { Text, ListItem } from "react-native-elements";
import { StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { NavigationEvents } from 'react-navigation'
import { Context as trackContext } from '../context/TrackContext'
const TrackListScreen = ({ navigation }) => {
  const { state, fetchTrack } = useContext(trackContext)
  return (
    <>
      <NavigationEvents onWillFocus={fetchTrack} />
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('TrackDetial', { _id: item._id })}>
              <ListItem chevron title={item.name} />
            </TouchableOpacity>
          )
        }}
      />
    </>
  );
};
TrackListScreen.navigationOptions = {}
const styles = StyleSheet.create({
  Map: {
    height: 300,
    width: '100%'
  }
});
TrackListScreen.navigationOptions = {
  title: 'traks List'
}
export default TrackListScreen;
