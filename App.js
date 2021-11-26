import React, {useState, useEffect, useContext} from 'react';
import { StyleSheet, Dimensions, Image, Text, Button, View, SafeAreaView, StatusBar, TouchableNativeFeedback, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GlobalProvider from './App/context/provider';
import {GlobalContext} from './App/context/provider';
import Navigation from './App/screens/Navigation';


export default function App() {

  // useEffect(() => {
  //   (async () => {
  //     Network.getMacAddressAsync().then(v => {
  //       console.log(v);
  //     });
  //   })();
  // }, [])
  // console.log(getDeviceId());

  const Stack = createNativeStackNavigator();

  return (
    <GlobalProvider>
      <Navigation />
    </GlobalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: "#5744B6",
  },
  loginLogo: {
    width: "150%",
    height: 150,
    top: Dimensions.get('window').height > 720 ? "20%" : Dimensions.get('window').height > 650 ? 60 : "10%",
    zIndex: 4,
  },
  loginGradient: 
  {
    width: "100%",
    height: '65%',
    position: "absolute",
    bottom: 0,
  },
  ovalWithShadow: {
    width: '100%',
    height: 100,
    borderRadius: 440,
    bottom: -5,
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 10,
    backgroundColor: 'white',
  },
  loginUpContainer: {
    width: '100%',
    height: Dimensions.get('window').height > 720 ? 200 : Dimensions.get('window').height > 650 ? 200 : 150,
    alignItems: 'center',
    backgroundColor: 'white',
    zIndex: 5,
  },
  cardStyle: {
    elevation: 7,
    width: "100%",
    borderRadius: 50,
  },
  firstBtn: {
    elevation: 10,
    right: 0,
    height: Dimensions.get('window').height > 720 ? 60 : Dimensions.get('window').height > 650 ? 55 : 50,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    position: "absolute",
    bottom: Dimensions.get('window').height > 720 ? 260 : Dimensions.get('window').height > 650 ? 210 : 200,
    backgroundColor: "#CC751F",
    width: Dimensions.get('window').height > 720 ? 160 : Dimensions.get('window').height > 650 ? 140 : 120,
    borderWidth: 0.5,
    overflow: 'hidden',
  },
  secondBtn: {
    elevation: 10,
    right: 0,
    height: Dimensions.get('window').height > 720 ? 60 : Dimensions.get('window').height > 650 ? 60 :50,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    position: "absolute",
    bottom: Dimensions.get('window').height > 720 ? 170 : Dimensions.get('window').height > 650 ? 125 : 120,
    backgroundColor: "white",
    width: Dimensions.get('window').height > 720 ? 220 : Dimensions.get('window').height > 650 ? 200 : 180,
    borderWidth: 0.5,
    overflow: 'hidden',
  },
  thirdBtn: {
    elevation: 8,
    right: 0,
    height: Dimensions.get('window').height > 720 ? 60 : Dimensions.get('window').height > 650 ? 60 :50,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    position: "absolute",
    bottom: Dimensions.get('window').height > 720 ? 80 : Dimensions.get('window').height > 650 ? 35 : 40,
    backgroundColor: "#138808",
    width: Dimensions.get('window').height > 720 ? 280 : Dimensions.get('window').height > 650 ? 265 : 250,
    borderWidth: 0.5,
    overflow: 'hidden',
  },
  loginBtnText: {
    textAlign: 'center',
    color: 'white',
    justifyContent: 'center',
    fontSize: 23,
    fontWeight: "600",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
    textShadowColor: 'black',
  },
  blueText: {
    textAlign: 'center',
    color: "#294A9F",
    justifyContent: 'center',
    fontSize: 23,
    fontWeight: "600",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
    textShadowColor: 'black',
  },
  pressStyle: {
    textAlign: 'center',
    justifyContent: 'center',
    width: "100%",
    height: "100%",
  },
  loginWith: {
    textDecorationLine: 'underline',
    textDecorationColor: "black",
    color: "white",
    fontSize: 30,
    top: Dimensions.get('window').height > 710 ? -90 : Dimensions.get('window').height > 650 ? -80 : -100,
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
    textShadowColor: 'black',
  },
});

// Dimensions.get('window').height > 720 ? 80 : Dimensions.get('window').height > 650 ? 60 :