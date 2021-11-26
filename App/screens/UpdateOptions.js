// import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Dimensions, Image, Text, Button, View, StatusBar, SafeAreaView, TouchableNativeFeedback, Pressable, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import * as Application from 'expo-application';

export default function UpdateOptions({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={['#fff', '#f6e6ff']}
                style={styles.background}
            />
            
            <Image 
            source={require("../assets/transparentLogo.png")} 
            style={styles.aadharLogo} />

            <View style={styles.options}>
                <Pressable onPress={() => navigation.navigate("Generate VID")} style={styles.pressStyle} android_ripple={{color: "#555"}}>
                    <Text style={styles.btnText}>Update your address</Text>
                </Pressable>
            </View>

            <View style={styles.options}>
                <Pressable onPress={() => navigation.navigate("Generate VID")} style={styles.pressStyle} android_ripple={{color: "#555"}}>
                    <Text style={styles.btnText}>Update your registered mobile number</Text>
                </Pressable>
            </View>

            <StatusBar style="dark" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    textCenter: {
        textAlign: "center",
    },
    background: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
    },
    options: {
        width: "100%",
        height: Dimensions.get('window').height > 720 ? 65 : Dimensions.get('window').height > 650 ? 60 : 50,
        borderBottomColor: "rgb(170, 170, 170)",
        borderBottomWidth: 1,
        borderTopColor: "rgb(230, 230, 230)",
        borderTopWidth: 1,
        backgroundColor: "#dcfffa",
        marginBottom: 10,
    },
    pressStyle: {
        color: 'white',
        justifyContent: 'center',
        width: "100%",
        height: "100%",
        paddingLeft: 20,
    },
    aadharLogo: {
        width: Dimensions.get('window').height > 720 ? 180 : Dimensions.get('window').height > 650 ? 170 : 150,
        height: Dimensions.get('window').height > 720 ? 145 : Dimensions.get('window').height > 650 ? 120 : 100,
        marginTop: 20,
        marginBottom: 40,
    },
    btnText: {
        fontSize: Dimensions.get('window').height > 720 ? 18 : Dimensions.get('window').height > 650 ? 17 : 15,
    }
});