// import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Dimensions, Image, Text, Button, View, StatusBar, SafeAreaView, TouchableNativeFeedback, Pressable, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';

export default function Dashboard({ navigation }) {
    
    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={['#fff', '#f6e6ff']}
                style={styles.background}
            />
            <View>
                <Image 
                resizeMode={"contain"}
                source={require('../assets/profileImage.jpg')} 
                style={styles.imageStyle} />
            </View>
            <View style={{alignItems: 'center'}}>
                {/* Fetch the person's name*/}
                <Text style={{fontSize: 22}}>Person's Name</Text>
                {/* Fetch UID */}
                <Text>XXXXXXXX1111</Text>
                {/* Fetch VID */}
                <Text style={styles.vid}>VID: 123456789012</Text>
                {/* Fetch valid time for the above VID */}
                <Text style={{fontSize: 12}}>VID Expires In 24 hours</Text>
                {/* Registered Mobile Number */}
                <Text style={styles.mobile}>Mobile : 9999999999</Text>
            </View>

            {/* This is the button to generate VID from dashboard */}
            <View style={styles.firstBtn}>
                <Pressable onPress={() => navigation.navigate("Generate VID")} style={styles.pressStyle} android_ripple={{color: "#222"}}>
                    <Text style={styles.btnText}>Generate Your VID</Text>
                </Pressable>
            </View>

            <View style={styles.secondBtn}>
                <Pressable onPress={() => navigation.navigate("Update Your Information")} style={styles.pressStyle} android_ripple={{color: "#222"}}>
                    <Text style={styles.btnText}>Update Your Information</Text>
                </Pressable>
            </View>

            <View style={styles.thirdBtn}>
                <Pressable onPress={() => navigation.navigate("Contact Us")} style={styles.pressStyle} android_ripple={{color: "#222"}}>
                    <Text style={styles.btnText}>Contact Us</Text>
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
    firstBtn: {
        width: "90%",
        height: 40,
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: Dimensions.get('window').height > 720 ? 90 : Dimensions.get('window').height > 650 ? 70 : 50,
        marginBottom: 20,
        backgroundColor: '#35c100',
    },
    secondBtn: {
        width: "90%",
        height: 40,
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 20,
        backgroundColor: '#0490eb',
    },
    thirdBtn: {
        width: "90%",
        height: 40,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#c72e00',
    },
    pressStyle: {
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        height: "100%",
    },
    btnText: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold",
    },
    vid: {
        marginTop: 10,
        fontSize: 16,
    },
    mobile: {
        marginTop: 10,
    },
    imageStyle: {
        width: Dimensions.get('window').height > 720 ? 125 : Dimensions.get('window').height > 650 ? 110 : 100,
        height: Dimensions.get('window').height > 720 ? 125 : Dimensions.get('window').height > 650 ? 110 : 100,
        marginTop: Dimensions.get('window').height > 720 ? 40 : Dimensions.get('window').height > 650 ? 30 : 20,
        marginBottom: 20,
        borderRadius: 50,
        shadowColor: "rgb(0, 0, 0)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
})