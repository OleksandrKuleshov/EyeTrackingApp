import React, {Component, useState, useEffect} from "react";
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native"
import MyStyles from '../Styles/MyStyles';

function HomeScreen({navigation}) { 

  return (
    <View style={MyStyles.container}>
      <Text>Hello</Text>
      <Button 
      title = "Start"
      onPress={() => navigation.navigate("Camera")}
      />
    </View>
  );
}

export default HomeScreen;
