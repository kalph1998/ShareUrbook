import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Button,
  Alert
} from "react-native";
import bgimage from "./assets/background.png";
import logo from "./assets/logo.png";

export default function App() {
  return (
    <ImageBackground source={bgimage} style={styles.backGroundContainer}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.welcome}>Welcome,Amigo</Text>
      </View>
      <View style={styles.login}>
        <Button title="log in"   />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backGroundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: null,
    height: null
  },
  logoContainer: {
    marginTop: 80,
    alignSelf: "flex-start",
    position: "relative",
    marginLeft: 10,
    flex: 2
  },
  textContainer: {
    alignItems: "center",
    flex: 4
  },
  welcome: {
    fontSize: 45,
    color: "#2f354b",
    textAlign: "center",
    color: "white",
   
  },
  loginContainer: {
    flex: 4,
    justifyContent: "flex-start",
    alignItems:'center'
   
  },
  login:{
    marginVertical:10


  }

});
