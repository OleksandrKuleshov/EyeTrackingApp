import React, {Component, useState, useEffect} from "react";
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native"
import {Camera} from 'expo-camera';

  // useEffect(() => {
  //   setInterval(() => {
  //     alert("test");
  //   },1000)
  // })

function GameScreen() {

  const randomNumber = Math.floor(Math.random() * 10) +1;
  const test = 0;


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
        marginTop: 10,
        marginLeft: 365,
        margin: test,
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Text style ={{fontSize: 35}}>{randomNumber}</Text>
      </View>
    </View>
  );

}

export default GameScreen;