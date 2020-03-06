import React from "react";
import { View, Text, Image, ImageBackground, StyleSheet } from "react-native";
import WelcomeHome from "../assets/Welcomehome.png";
import Logo from "../assets/logo.png";
import Continue from "../Components/signup";
const WelcomeScreen = props => {
  return (
    <ImageBackground source={WelcomeHome} style={styles.Screen}>
      <View style={styles.LogoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.Moto}>
          A great way for passive income and rent a book at really low cost
        </Text>
      </View>
      <View style={styles.ButtonContainer}>
        <Continue
          text="Continue"
          onClick={() => {
            props.navigation.push("Home");
          }}
        />
      </View>
      <View style={styles.logincontainer}>
        <Continue style={styles.Continue} text="Log in"
        onClick={()=>{props.navigation.navigate('SignUp')}} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  Screen: {
    flex: 1
  },
  LogoContainer: {
    alignItems: "center",
    marginTop: 100
  },
  textContainer: {
    justifyContent: "space-evenly",
    marginBottom: "20%",
    flex: 5
  },
  Moto: {
    textAlign: "center",
    color: "white",
    fontSize: 18
  },
  ButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  },
  logincontainer:{
    alignItems:"center",
    marginBottom:20
  }
});

export default WelcomeScreen;
