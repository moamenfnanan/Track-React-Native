import React from "react";
import { Text, Button } from "react-native-elements";
import { StyleSheet ,Image} from "react-native";
import MapView from 'react-native-maps'
const TrackListScreen = ({navigation}) => {
  return (
    <>
      <Text h1>TrackListScreen</Text>
      <Button 
        title='go to your track'
        onPress={()=>navigation.navigate('TrackDetial')}
      />
    </>
  );
};
TrackListScreen.navigationOptions={}
const styles = StyleSheet.create({
  Map:{
    height:300,
    width:'100%'
  }
});
export default TrackListScreen;
