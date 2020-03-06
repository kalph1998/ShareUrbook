import React from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet,Touchable } from "react-native";
import Colors from '../Constants/Colors'

const buttonSignUp = props => {
  const content = (
    <View style={{...styles.button,...props.style}}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
  return <TouchableOpacity activeOpacity={0.8} onPress={props.onClick}>{content}</TouchableOpacity>;
};

const styles = StyleSheet.create({
  button: {
    padding: 16,
    width: 230,
    alignItems: "center",
    borderRadius:35,
    borderWidth:2,
    borderColor:'white'
   
  },
  text: {
    color: "white",
    fontSize: 24
  }
});

export default buttonSignUp