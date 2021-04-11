import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';

// Firebase Config
import firebase from 'firebase/app'
import firebaseConfig from './config';

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
}

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import Screen
import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initalRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false}} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}