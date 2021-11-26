import React, {useState, useEffect, useContext} from 'react';
import { StyleSheet, Dimensions, Image, Text, Button, View, SafeAreaView, StatusBar, TouchableNativeFeedback, Pressable } from 'react-native';
import {Card} from 'react-native-shadow-cards';
import { useFonts, RobotoSlab_700Bold } from '@expo-google-fonts/inter';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { LinearGradient } from 'expo-linear-gradient';
import Login from './Login';
import Uid from './Uid';
import Vid from './Vid';
import QrLogin from './QrCodeLogin';
import Dashboard from './Dashboard';
import VidGenerate from './VidGenerate';
import UpdateOptions from './UpdateOptions';
import ContactUs from './ContactUs';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { BarCodeScanner } from 'expo-barcode-scanner';
import GlobalProvider from '../context/provider';
import {GlobalContext} from '../context/provider';
import * as Application from 'expo-application';
import { startActivityAsync, ActivityAction } from 'expo-intent-launcher';

export default function Navigation()  {

    const [isLoggedIn, setIsLoggedIn] = useContext(GlobalContext);

    const Stack = createNativeStackNavigator();
    console.log("Logged in", isLoggedIn);
    console.log("Android id: ", Application.androidId);

    // startActivityAsync("in.gov.uidai.rdservice.face.CHECK_LIGHT", {
    //     data: {
    //         "request": '<checkLighingRequest txnId = "123" language = ""/>'
    //     }
    // });

    return (
        <NavigationContainer>
            {isLoggedIn ? 
            <Stack.Navigator initialRouteName="Dashboard">
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="Generate VID" component={VidGenerate} />
                <Stack.Screen name="Update Your Information" component={UpdateOptions} />
                <Stack.Screen name="Contact Us" component={ContactUs} />
            </Stack.Navigator>
            : 
            <Stack.Navigator initialRouteName="home">
                <Stack.Screen name="home" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="uid" component={Uid} options={{ headerShown: false }} />
                <Stack.Screen name="vid" component={Vid} options={{ headerShown: false }} />
                <Stack.Screen name="qrLogin" component={QrLogin} options={{ headerShown: false }} />
            </Stack.Navigator>
            
            }
        </NavigationContainer>
    )
};