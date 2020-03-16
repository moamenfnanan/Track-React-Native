import React,{useContext} from 'react';
import { Input, Button } from 'react-native-elements'
import Spacer from './Spacer';
import { Context as LocationContext} from '../context/LocationContext'
const TrackForm = () => {
    const {state:{recording,name,locations},startRecording, stopRecording, changeName }=useContext(LocationContext);
    console.log(locations.length);
    return <>
        <Spacer />
        <Input placeholder="Enter Name" value={name} onChangeText={changeName} />
        <Spacer />
        {recording?<Button title="stop" onPress={stopRecording}/>:<Button title="Start Recording" onPress={startRecording}/>}    
    </>
}
export default TrackForm