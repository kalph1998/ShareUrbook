import React, {   useState } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import bgimage from "../assets/background.png";
import Signup from "../Components/signup";
import { Input } from "react-native-elements";
import { HideWithKeyboard } from "react-native-hide-with-keyboard";
import firebaseAuth from "../Components/firebase";

const loginScreen = (props) => {
  const [email, SetEmail] = useState("");
  const [passWord, SetPassWord] = useState("");

  const handleSignIn = () => {
    firebaseAuth
      .signInWithEmailAndPassword(email, passWord)
      .then(() => {
        props.navigation.navigate("Home");
      })
      .catch((error) => {
        console.log(`ye vala error h ${error}`);
      });
  };
  return (
    <ImageBackground source={bgimage} style={styles.backGroundContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.welcome}>Welcome,Amigo</Text>
      </View>

      <Input
        autoCapitalize="none"
        placeholder="Username"
        leftIcon={{
          type: "font-awesome",
          name: "envelope",
          color: "#fff",
          size: 20,
        }}
        containerStyle={{ margin: 25, width: "80%" }}
        inputStyle={{ marginLeft: 10, color: "#fff" }}
        placeholderTextColor={"#ccc"}
        keyboardType="email-address"
        value={email}
        textContentType="emailAddress"
        onChangeText={(email)=>{SetEmail(email)}}
      />
      <Input
        placeholder="Password"
        leftIcon={{
          type: "font-awesome",
          name: "lock",
          color: "#fff",
          size: 25,
        }}
        containerStyle={{ margin: 25, width: "80%" }}
        inputStyle={{ marginLeft: 10, color: "#fff" }}
        secureTextEntry={true}
        placeholderTextColor={"#ccc"}
        inputContainerStyle={{ borderBottomColor: "#fff" }}
        value={passWord}
        onChangeText={(password)=>{SetPassWord(password)}}
      />

      <View style={{ flex: 1 }}>
        <HideWithKeyboard>
          <Signup style={{ marginBottom:15}}  color="rgba(0,0,0,0)" text="login" onClick={handleSignIn} />
          <Signup color="rgba(0,0,0,0)" text="Signup" onClick={()=>{props.navigation.navigate('Logup')}} />
        </HideWithKeyboard>
      </View>
    </ImageBackground>
  );

};



const styles = StyleSheet.create({
  backGroundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  textContainer: {
    alignItems: "center",
    flex: 1,
   
  },
  welcome: {
    fontSize: 45,
    color: "#2f354b",
    textAlign: "center",
    color: "white",
    marginTop: "10%",
  },
  loginContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default loginScreen;
