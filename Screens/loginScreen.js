import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import bgimage from "../assets/background.png";
import Signup from "../Components/signup";
import { Input } from "react-native-elements";

const loginScreen = props => {
  const input = React.createRef();
  return (
    <ImageBackground source={bgimage} style={styles.backGroundContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.welcome}>Welcome,Amigo</Text>
      </View>

      <Input
        placeholder="Username"
        leftIcon={{ type: "font-awesome", name: "envelope", color: "#fff",size:20 }}
        containerStyle={{ margin: 25, width: "80%", }}
        inputStyle={{ marginLeft: 10, color: "#fff" }}
        placeholderTextColor={'#ccc'}
        

      />
      <Input
        placeholder="Password"
        leftIcon={{ type: "font-awesome", name: "lock", color: "#fff",size:25 }}
        containerStyle={{ margin: 25, width: "80%" }}
        inputStyle={{ marginLeft: 10, color: "#fff" }}
        secureTextEntry={true}
        placeholderTextColor={'#ccc'}
        inputContainerStyle={{borderBottomColor:'#fff'}}
        
      />


      <View style={styles.signupContainer}>
        
        <Signup color="rgba(0,0,0,0)" text="Sign up" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backGroundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  textContainer: {
    alignItems: "center",
    flex: 1
  },
  welcome: {
    fontSize: 45,
    color: "#2f354b",
    textAlign: "center",
    color: "white",
    marginTop: "40%"
  },
  loginContainer: {
    justifyContent: "flex-start",
    alignItems: "center"
  },

  signupContainer: {
    flex: 1
  }
});

export default loginScreen;
