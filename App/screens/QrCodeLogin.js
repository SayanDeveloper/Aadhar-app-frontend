// import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Dimensions, Image, Text, Button, View, SafeAreaView, StatusBar, TouchableNativeFeedback, Pressable } from 'react-native';
import {Card} from 'react-native-shadow-cards';
import { useFonts, RobotoSlab_700Bold } from '@expo-google-fonts/inter';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { LinearGradient } from 'expo-linear-gradient';
import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';
import * as Application from 'expo-application';

export default function QrLogin() {

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Not yet scanned');

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  };

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  console.log(hasPermission);
  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // alert(`Type: ${type} \nData: ${data}`);
    setText(data);
    // console.log('Type: ' + type + '\nData: ' + data);
  };
  const screenScannedData = () => {
    console.log(text);
  }

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text style={{color: "white"}}>Requesting for camera permission</Text>
      </View>
      )
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>)
  };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.barCodeMask}></View>
                <View style={styles.barcodebox}>
                    <BarCodeScanner 
                    // barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]} 
                    onBarCodeScanned={handleBarCodeScanned} 
                    style={{ height: 1200, width: 800 }} />
                </View>
            </View>
            <Button title="click here" onPress={screenScannedData} />
            <StatusBar style="auto" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: "#7744B6",
        width: "100%",
        height: "100%",
    },
    barcodebox: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        width: "100%",
        height: 400,
        // overflow: 'hidden',
        // backgroundColor: 'tomato'
    },
    barCodeMask: {
      width: "100%",
      height: "100%",
      zIndex: 20,
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      position: "absolute",
      top: 0,
    },
})

// Dimensions.get('window').height > 720 ? 80 : Dimensions.get('window').height > 650 ? 60 :