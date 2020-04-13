// SignUp.js
import React,{useState} from 'react'
import { StyleSheet, Text, View, ImageBackground,Button } from 'react-native'
import { Input } from "react-native-elements";
import bgimage from "../assets/background.png";
import { HideWithKeyboard } from "react-native-hide-with-keyboard";
import Signup from "../Components/signup";
import firebaseAuth from "../Components/firebase";



const SignUp =(props)=>{
  const [email, SetEmail] = useState("");
  const [passWord, SetPassWord] = useState("");

const SignUpHandler = ()=>{
  firebaseAuth.createUserWithEmailAndPassword(email,passWord).then(()=>{
    props.navigation.push('Home')
  })
}
 
  
  return(
    <ImageBackground source={bgimage} style={styles.backGroundContainer} >
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
      <Button color="transparent"
         title="Already have an account? Login "
         onPress={() => {props.navigation.navigate('SignUp')}}
          />
      <View style={{ flex: 1 }}>
        <HideWithKeyboard>
          <Signup style={{ marginTop:30}}  color="rgba(0,0,0,0)" text="create account" onClick={SignUpHandler} />
          
          
        </HideWithKeyboard>
      </View>
      
    </ImageBackground>
  )
  
}
const styles = StyleSheet.create({
  backGroundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex:1,
    alignItems: "center",
    
   
  },
  welcome: {
    fontSize: 45,
    color: "#2f354b",
    textAlign: "center",
    color: "white",
    marginTop: "10%",
  },
})

export default SignUp