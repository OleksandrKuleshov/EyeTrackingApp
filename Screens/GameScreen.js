import React, {Component, useState, useEffect} from "react";
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native"
import {Camera} from 'expo-camera';



function GameScreen() {

  const randomNumber = Math.floor(Math.random() * 10) +1;
  <Camera
    ref = {ref => {
      this.Camera = ref;
    }}
  />;
  snap = async() => {
    if (this.Camera) {
      let photo = await this.Camera.takePictureAsync();
    }
  };
  return (
    
    <View style={{
      flex : 1,
      flexDirection : "column",
      width: 50, 
      height: 50,
    }}>
      <View style={{
        width:50, 
        height: 50,
        backgroundColor: 'steelblue',
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Text style ={{fontSize: 35}}>{randomNumber}</Text>
      </View>
    </View>
  );

}

export default GameScreen;