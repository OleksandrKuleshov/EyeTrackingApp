import React, {Component, useState, useEffect} from "react";
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Camera } from "expo-camera";
import * as MediaLibrary from 'expo-media-library';


function CameraScreen({navigation}) { 

  const [hasPermission, setHasPermission] = useState(null);
  const [hasMediaPermission, setHasMediaPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  

  useEffect(() => {
    (async () => {
      const {status} = await Camera.requestPermissionsAsync();
      console.log("camera permission: " + status);
      setHasPermission(status === 'granted');
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const {status} = await MediaLibrary.requestPermissionsAsync();
      console.log("media library permission: " + status);
      setHasMediaPermission(status ==='granted');
    })();
  }, []);



  if (hasPermission && hasMediaPermission) {
    return (
    <View style={{ 
      flex: 1, 
      flexDirection:"column", 
      alignContent: "center", 
      justifyContent: "center",
    }}>
      <Camera 
      style={{ 
        flex : 1,
        opacity: 1,
      }} 
        type={type}
        ref = {ref => {
          this.camera = ref;
        }}
      >
      </Camera>
      <View style={{ 
          position: "relative",
          marginBottom: 100,
        }}>
        <Button 
          title="Start recording"
          onPress ={async () => {
            if (this.camera) {
              await this.camera.recordAsync({quality:1080, mirror: false}).then(async(data) => 
                await MediaLibrary.saveToLibraryAsync(data.uri));
            }
          }}
        />
        <Button
          title="Stop recording"
          onPress ={() => {
            if (this.camera) {
              this.camera.stopRecording();
            }
          }}
        />
        <Button
          title= "Go to game scene"
          onPress= {() => {
            navigation.navigate("Game");
          }}
        />
      </View>
    </View>
  );
  }

  if (hasPermission === null) {
    return <Text>No permission</Text>
  }
  else if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }
  else if (hasMediaPermission === null) {
    return <Text>No access to Media Library</Text>
  }
  else if (hasMediaPermission === false) {
    return <Text>No access to Media Library</Text>
  }
  
}
export default CameraScreen;