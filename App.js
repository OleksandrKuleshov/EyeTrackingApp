import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Alert, StyleSheet, Button, Text, View, TouchableOpacity } from 'react-native';
import {Camera} from 'expo-camera';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import CameraScreen from './Screens/CameraScreen';
import GameScreen from './Screens/GameScreen';
//import ProfileScreen from './Components/Profile';

const Stack = createStackNavigator();

const App = () => {
  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component = {HomeScreen}/>
        <Stack.Screen name = "Camera" component = {CameraScreen}/>
        <Stack.Screen name = "Game" component = {GameScreen}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;
