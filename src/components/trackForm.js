import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements'
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext'
import useSaveTrack from '../hooks/useSaveTrack'
const TrackForm = () => {
    const [saveTrack] = useSaveTrack();
    const { state: { recording, name, locations }, startRecording, stopRecording, changeName } = useContext(LocationContext);
    return <>
        <Spacer />
        <Input placeholder="Enter Name" value={name} onChangeText={changeName} />
        <Spacer />
        {recording ? <Button title="stop" onPress={stopRecording} /> : <Button title="Start Recording" onPress={startRecording} />}
        <Spacer />
        {!recording && locations.length ? (<Button title='save' onPress={saveTrack} />) : null}
    </>
}
export default TrackForm
