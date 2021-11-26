// import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Dimensions, Image, Text, Button, View, SafeAreaView, StatusBar, TouchableNativeFeedback, Pressable } from 'react-native';
import {Card} from 'react-native-shadow-cards';
import { useFonts, RobotoSlab_700Bold } from '@expo-google-fonts/inter';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import * as Application from 'expo-application';

export default function Login({ navigation }) {

  console.log(Dimensions.get('window').height);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#41a5ff', 'transparent']}
        style={styles.backgroundGrad}
      />
      <View style={styles.loginUpContainer}>
        <Image resizeMode={"contain"} style={styles.loginLogo} source={require('../assets/logo.png')} />
      </View>
      <View style={{width: "100%"}}>
        <Image resizeMode={"cover"} style={{top: -122, zIndex: 3, width: "100%"}} source={require('../assets/ellipse.png')} />
      </View>
      <View>
        <Text style={styles.loginWith}>
          LOGIN WITH
        </Text>
      </View>
      <View>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={{width: "100%", height: 50}}
      />
      </View>
      <View style={styles.firstBtn} onPress={() => navigation.navigate("uid")}>
        <Pressable onPress={() => navigation.navigate("uid")} style={styles.pressStyle} android_ripple={{color: "#aaa"}}>
          <Text style={styles.loginBtnText}>UID</Text>
        </Pressable>
      </View>
      <View style={styles.secondBtn} > 
        <Pressable onPress={() => navigation.navigate("vid")} style={styles.pressStyle} android_ripple={{color: "#aaa"}}>
          <Text style={styles.blueText}>VID</Text>
        </Pressable>
      </View>
      <View style={styles.thirdBtn} >
        <Pressable onPress={() => navigation.navigate("qrLogin")} style={styles.pressStyle} android_ripple={{color: "#aaa"}}>
          <Text style={styles.loginBtnText}>QR Code</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

// const screenHeight = Dimensions().screen.height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: "#5744B6",
  },
  backgroundGrad: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
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