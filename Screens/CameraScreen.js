import React, {Component, useState, useEffect} from "react";
import {Button, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Camera } from "expo-camera";
import * as MediaLibrary from 'expo-media-library';
import * as FaceDetector from 'expo-face-detector'
import { Header } from "react-native/Libraries/NewAppScreen";
import { useHeaderHeight } from '@react-navigation/stack';


function CameraScreen({navigation}) { 

  const [hasPermission, setHasPermission] = useState(null);
  const [hasMediaPermission, setHasMediaPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  // const [faces, setFaces] = useState([]);
  const headerHeight = useHeaderHeight();


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
      console.log("height: " + Dimensions.get('window').height + " width: " + Dimensions.get('window').width);
      console.log(headerHeight);
      setHasMediaPermission(status ==='granted');
    })();
  }, []);

  // handleFacesDetected = ({faces}) => {
  //   setFaces(faces);
  //   const _faces = JSON.parse(faces);
  //   // const test = JSON.stringify(faces);
  //   console.log(_faces[0]);
  // }

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
        // onFacesDetected ={this.handleFacesDetected}
        // faceDetectorSettings={{
        //   mode: FaceDetector.Constants.Mode.fast,
        //   detectLandmarks: FaceDetector.Constants.Landmarks.all,
        //   runClassifications: FaceDetector.Constants.Classifications.all,
        //   minDetectionInterval: 100,
        //   tracking: true,
        // }}
      >
      </Camera>
      <View style={{ 
          position: "relative",
          marginBottom: 100,
        }}>
        <Button 
          title="Start recording111"
          onPress ={() => navigation.navigate("Game")}
        />
        <Button title = "Start reading recording" onPress ={() => navigation.navigate("ReadScreen")}/>
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