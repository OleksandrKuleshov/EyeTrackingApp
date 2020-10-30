import React, {Component, useState, useEffect} from "react";
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions} from "react-native"
import {Camera} from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';


function GameScreen({navigation}) {

  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);


  record = async () => {
    if (this.cameraTwo) {
      console.log("before");
      await this.cameraTwo.recordAsync({quality:1080, mirror: false}).then(
        async(data) => await MediaLibrary.saveToLibraryAsync(data.uri));
      console.log("after");
    }
  };

  start = () => {
    // if (count < 8) {
    // const interval = setInterval(() => {
    //     setCount(count => count +1);
    //   }, 1000)
    //   console.log(count);
    // }
    // if (this.cameraTwo) {
    //   this.cameraTwo.stopRecording();
    // }
    // alert("Done");
    // navigation.navigate("Home");
    // return () => clearInterval(interval);
  }

  startGame = () => {

    record();
    start();
    setStarted(true);
  }
  useEffect(() => {
    if (started) {
      if(count < 8) {
        const interval = setInterval(() => {
          setCount(count => count + 1);
        }, 1000)
        return () => clearInterval(interval);
      }
      if (this.camera) {
        this.camera.stopRecording();
      }
      alert("Done");
      navigation.navigate("Camera");
    }
  });

  const randomNumber = Math.floor(Math.random() * 10) +1;
  const d1 = {height: Dimensions.get('window').height*0.02, width: Dimensions.get('window').width*0.05};
  const d2 = {height: Dimensions.get('window').height*0.02, width: Dimensions.get('window').width*0.5-20};
  const d3 = {height: Dimensions.get('window').height*0.02, width: Dimensions.get('window').width*0.95-40}
  const d4 = {height: Dimensions.get('window').height*0.4, width: Dimensions.get('window').width*0.05}
  const d5 = {height: Dimensions.get('window').height*0.4, width: Dimensions.get('window').width*0.5-20}
  const d6 = {height: Dimensions.get('window').height*0.4, width: Dimensions.get('window').width*0.95-40}
  const d7 = {height: Dimensions.get('window').height*0.7, width: Dimensions.get('window').width*0.05}
  const d8 = {height: Dimensions.get('window').height*0.7, width: Dimensions.get('window').width*0.5-20}
  const d9 = {height: Dimensions.get('window').height*0.7, width: Dimensions.get('window').width*0.95-40}

  const dots = [d1, d2, d3, d4, d5, d6, d7, d8, d9];
  
  if (started) {
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
        width: 40, 
        height: 40,
        backgroundColor: 'steelblue',
        marginTop: dots[count].height,
        marginLeft: dots[count].width,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        opacity: 1,
        position:"absolute",
      }}>
        <Text style ={{fontSize: 25}}>{randomNumber}</Text>
      </View>
    </View>
  );
  }

  else if(!started) {
    return (
    <View>
      <Camera 
      style={{ 
        flex : 1,
        opacity: 0.5,
      }} 
        type={Camera.Constants.Type.front}
        ref = {ref => {
          this.cameraTwo = ref;
        }}
      >
      </Camera>
      <Button
        title = "Start Recording"
        onPress={() => startGame()}
        />
    </View>
    )
  }

  
}

export default GameScreen;