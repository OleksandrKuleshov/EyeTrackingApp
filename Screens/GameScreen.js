import React, {Component, useState, useEffect} from "react";
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions} from "react-native"
import {Camera} from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';


function GameScreen({navigation}) {

  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);


  record = async () => {
    if (this.cameraTwo) {
      await this.cameraTwo.recordAsync({quality:1080, mirror: false}).then(
        async(data) => await MediaLibrary.saveToLibraryAsync(data.uri));
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
      if(count < 9) {
        const interval = setInterval(() => {
          if(count < 8) {
            setCount(count => count + 1);
            console.log(dots[count]);
          }
          else {
            setStarted(false);
            if (this.camera) {
              this.camera.stopRecording();
            }
            alert("Done");
            navigation.navigate("Camera");
          }
        }, 3000)
        return () => clearInterval(interval);
      }
    }
  });

  // Dimensions.get('window').height*0.02
  // Dimensions.get('window').width*0.05
  const randomNumber = Math.floor(Math.random() * 10) +1;
  const d1 = {height: 30, width: 30}; //     (50, 138)
  const d2 = {height: 30, width: 167.5}; //  (187,5; 138)
  const d3 = {height: 30, width: 305}; //    (325, 138)
  const d4 = {height: 298, width: 30}; //    (50, 406)
  const d5 = {height: 298, width: 167.5}; // (187,5; 406)
  const d6 = {height: 298, width: 305}; //   (325, 406)
  const d7 = {height: 654, width: 30}; //    (50, 762)
  const d8 = {height: 654, width: 167.5}; // (187,5; 762)
  const d9 = {height: 654, width: 305}; //   (325, 762)

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
      <View style={{ 
          position: "relative",
          marginBottom: 100,
        }}>
        <Button
          title = "Start Recording"
          onPress={() => startGame()}
          />
        </View>
    </View>
    )
  }

  
}

export default GameScreen;