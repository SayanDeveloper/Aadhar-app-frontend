// import { StatusBar } from 'expo-status-bar';
import React, {useState, useContext, useEffect} from 'react';
import { StyleSheet, Dimensions, Image, Text, TextInput, Button, View, SafeAreaView, StatusBar, TouchableNativeFeedback, Pressable } from 'react-native';
import {Card} from 'react-native-shadow-cards';
import { useFonts, RobotoSlab_700Bold } from '@expo-google-fonts/inter';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { LinearGradient } from 'expo-linear-gradient';
import { GlobalContext } from "../context/provider";
import * as Application from 'expo-application';

export default function Vid() {
    const MacID = Application.androidId;
    const getCaptcha = async () => {
    const response = await fetch('http://192.168.1.187:5000/capcha/' + MacID, {
        method: 'GET',
        // body: JSON.stringify({adharInput : "99999166666342" })
    });
    const json = await response.text();
    setEncodedBase64(json);
        // console.log(encodedBase64);
        // do something with myJson
    }
    useEffect(() => { 
        getCaptcha();
    },[]);
    const [encodedBase64, setEncodedBase64] = useState("");
    let [captcha, setcaptcha] = useState("");
    let [adno,setadno]=useState('');
    let [otp,newotp]=useState('');
    const [modalVisible,setModalVisible]=useState(false);
    const [captchaVerified, setCaptchaVerified] = useState(false);
   

    const [isLoggedIn, setIsLoggedIn] = useContext(GlobalContext);

    const handler = (text) => {
        setcaptcha(text);
    };
    const adharhandler= (t)=>{
        setadno(t);
    }
    const otphandler=(h)=>{
        newotp(h);
    }

    const captchaHandling = () => {
        if (captcha == "12345" && captchaVerified == false) {
        setCaptchaVerified(true);
        }
        if (otp == "123" && captchaVerified == true) {
        setIsLoggedIn(true);
        }
    }
    
    console.log(Dimensions.get("window").height);
    

    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={['#41a5ff', 'transparent']}
                style={{height: Dimensions.get('window').height,
                width: "100%",
                position: "absolute",
                top: 0,
                }}
            />
        <View style={styles.loginUpContainer}>
            <Image
            resizeMode={"contain"}
            style={styles.loginLogo}
            source={require("../assets/logo.png")}
            />
        </View>
        <View style={{ width: "100%" }}>
            <Image
            resizeMode={"cover"}
            style={{ top: -122, zIndex: 3, width: "100%" }}
            source={require("../assets/ellipse.png")}
            />
        </View>
        <View>
            <Text
            //  style={styles.loginWith}
            style={styles.EnterAdhar}
            >
            Enter Adhar Number
            </Text>
        </View>
        <View>
            <LinearGradient
            // Background Linear Gradient
            colors={["rgba(0,0,0,0.8)", "transparent"]}
            style={{ width: "100%", height: 50 }}
            />
        </View>
        <View
        //   style={styles.firstBtn}
        //   onPress={() => navigation.navigate("uid")}
        >
            <TextInput
            placeholder="adhar number"
            style={styles.input}
            keyboardType={"numeric"}
            onChangeText={adharhandler}
            />
        </View>

        <View>
            <Text
            style={{
                color: "white",
                fontSize: 25,
                top:
                Dimensions.get("window").height > 710
                    ? -75
                    : Dimensions.get("window").height > 650
                    ? -80
                    : -110,
            }}
            >
            Enter the captcha
            </Text>
        </View>
        <View
            style={{
            flexDirection: "row",
            paddingRight: "2%",
            paddingLeft: "2%",
            top:
                Dimensions.get("window").height > 710
                ? -65
                : Dimensions.get("window").height > 650
                ? -80
                : -100,
            }}
        >
            <View style={{ position: "relative", flex: 1, margin: "1%" }}>
            <Image 
                resizeMode={"contain"} 
                source= {{uri: `data:image/gif;base64,${encodedBase64}`}}
                style={styles.img} 
            />
            </View>
            <View style={{ position: "relative", flex: 2 }}>
            <TextInput
                placeholder="captcha"
                style={{
                textAlign: "center",
                marginRight: 10,
                marginLeft: 20,
                top: 2,
                backgroundColor: "#f8f8ff",
                borderWidth: 1,
                borderRadius: 5,
                height: 37,
                }}
                onChangeText={handler}
            />
            </View>
        </View>
        {captchaVerified && 
            <View style={styles.inputContainer}>
            <Text style={{flex: 1, color: "white", fontSize: 17, fontWeight: "600"}}>Enter OTP : </Text>
            <TextInput style={styles.otpBox} 
                onChangeText={otphandler} 
                keyboardType={"numeric"} 
                textAlign="center"
            />
            </View>
        }

        <View style={styles.thirdBtn}>
            <Pressable
            onPress={captchaHandling}
            style={styles.pressStyle}
            android_ripple={{ color: "#aaa" }} 
            >
            <Text style={styles.loginBtnText}>SUBMIT</Text>
            </Pressable>
        </View>
        <StatusBar style="auto" />
        </SafeAreaView>
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
        top:
          Dimensions.get("window").height > 720
            ? "20%"
            : Dimensions.get("window").height > 650
            ? 60
            : "10%",
        zIndex: 4,
      },
    loginGradient: {
        width: "100%",
        height: "65%",
        position: "absolute",
        bottom: 0,
    },
    ovalWithShadow: {
        width: "100%",
        height: 100,
        borderRadius: 440,
        bottom: -5,
        shadowColor: "black",
        shadowRadius: 10,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        elevation: 10,
        backgroundColor: "white",
    },
    loginUpContainer: {
        width: "100%",
        height:
            Dimensions.get("window").height > 720
            ? 200
            : Dimensions.get("window").height > 650
            ? 200
            : 150,
        alignItems: "center",
        backgroundColor: "white",
        zIndex: 5,
    },
    cardStyle: {
        elevation: 7,
        width: "100%",
        borderRadius: 50,
    },
    inputContainer: {
        flexDirection: "row",
        top: Dimensions.get('window').height > 710 ? -5 : Dimensions.get('window').height > 650 ? -80 : -70,
        paddingLeft: "5%",
        paddingRight: "5%",
    },
    otpBox: {
        backgroundColor: "white",
        flex: 2,
        borderRadius: 5,
        height: 32,
    },
    firstBtn: {
        elevation: 10,
        right: 0,
        height:
            Dimensions.get("window").height > 720
            ? 60
            : Dimensions.get("window").height > 650
            ? 55
            : 50,
        justifyContent: "center",
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        position: "absolute",
        bottom:
            Dimensions.get("window").height > 720
            ? 260
            : Dimensions.get("window").height > 650
            ? 210
            : 200,
        backgroundColor: "#CC751F",
        width:
            Dimensions.get("window").height > 720
            ? 160
            : Dimensions.get("window").height > 650
            ? 140
            : 120,
        borderWidth: 0.5,
        overflow: "hidden",
    },
    secondBtn: {
        elevation: 10,
        right: 0,
        height:
            Dimensions.get("window").height > 720
            ? 60
            : Dimensions.get("window").height > 650
            ? 60
            : 50,
        justifyContent: "center",
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        position: "absolute",
        bottom:
            Dimensions.get("window").height > 720
            ? 170
            : Dimensions.get("window").height > 650
            ? 125
            : 120,
        backgroundColor: "white",
        width:
            Dimensions.get("window").height > 720
            ? 220
            : Dimensions.get("window").height > 650
            ? 200
            : 180,
        borderWidth: 0.5,
        overflow: "hidden",
    },
    thirdBtn: {
        elevation: 8,
        // right: 0,
        height:
            Dimensions.get("window").height > 720
            ? 50
            : Dimensions.get("window").height > 650
            ? 60
            : 50,
        justifyContent: "center",
        borderRadius: 25,
        // borderBottomLeftRadius: 25,
        position: "relative",
        top: Dimensions.get('window').height > 710 ? 50 : Dimensions.get('window').height > 650 ? -80 : -40,
        backgroundColor: "#C5412B",
        width:
            Dimensions.get("window").height > 720
            ? 180
            : Dimensions.get("window").height > 650
            ? 265
            : 250,
        borderWidth: 0.5,
        overflow: "hidden",
    },
    loginBtnText: {
        textAlign: "center",
        color: "white",
        justifyContent: "center",
        fontSize: 23,
        fontWeight: "600",
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 6,
        textShadowColor: "black",
    },
    blueText: {
        textAlign: "center",
        color: "#294A9F",
        justifyContent: "center",
        fontSize: 23,
        fontWeight: "600",
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 6,
        textShadowColor: "black",
    },
    pressStyle: {
        textAlign: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
    },
    loginWith: {
        textDecorationLine: "underline",
        textDecorationColor: "black",
        color: "white",
        fontSize: 30,
        top:
            Dimensions.get("window").height > 710
            ? -90
            : Dimensions.get("window").height > 650
            ? -80
            : -100,
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 6,
        textShadowColor: "black",
    },
    EnterAdhar: {
        color: `#f8f8ff`,
        fontSize: 25,
        top:
            Dimensions.get("window").height > 710
            ? -75
            : Dimensions.get("window").height > 650
            ? -80
            : -100,
        paddingBottom: 0,
    },
    input: {
        backgroundColor: "#f8f8ff",
        borderColor: "black",
        color: "black",
        width: 300,
        borderWidth: 1,
        borderRadius: 10,
        textAlign: "center",
        top:
            Dimensions.get("window").height > 710
            ? -100
            : Dimensions.get("window").height > 650
            ? -80
            : -130,
        height: 35,
    },
    img: {
        height: 33,
        width: 120,
        backgroundColor: "black",
    },
})

// Dimensions.get('window').height > 720 ? 80 : Dimensions.get('window').height > 650 ? 60 :