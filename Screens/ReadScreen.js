import React, {Component, useState, useEffect} from "react";
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions} from "react-native"
import {Camera} from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

function ReadScreen({navigation}) {
  const [started, setStarted] = useState(false);


    record = async () => {
    if (this.cameraThree) {
      await this.cameraThree.recordAsync({quality:1080, mirror: false}).then(
        async(data) => await MediaLibrary.saveToLibraryAsync(data.uri));
    }
  };


  startReadingRecording = () => {
    record();
    setStarted(true);
  }

  if(started) {
    return (
    <View style={{
      flex : 1,

    }}>
      <Camera 
      style={{ 
        flex : 1,
        opacity: 0,
      }} 
        type={Camera.Constants.Type.front}
        ref = {ref => {
          this.cameraTwo = ref;
        }}
      >
      </Camera>
      <View style={{
        flex: 1,
        alignContent: 'row',
        position: "absolute",
        opacity: 1,
      }}>
        <Text style={{fontSize : 20}}>
          Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have disdaimed that despicable wretch, Fyodor Pavlovitch, too much to have been upset by him in Father Zossima's cell, and so to have forgotten himself. "Teh monks were not to blame, in any case," he reflceted, on the steps. "And if they're decent people here (and the Father Superior, I understand, is a nobleman) why not be friendly and courteous with them?
        </Text>
      </View>
    </View>
    )
  }
  else{
return (
    <View>
      <Camera 
      style={{ 
        flex : 1,
        opacity: 0.5,
      }} 
        type={Camera.Constants.Type.front}
        ref = {ref => {
          this.cameraThree = ref;
        }}
      >
      </Camera>
      <View style={{ 
          position: "relative",
          marginBottom: 100,
        }}>
        <Button
          title = "Start Recording"
          onPress={() => startReadingRecording()}
          />
        </View>
    </View>
    )
  }

}

export default ReadScreen;