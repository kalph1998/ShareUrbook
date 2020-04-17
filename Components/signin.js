import React  from "react";
import { View, Text, TouchableNativeFeedback, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


const Buttonbg = props => {
  const content = (
    <View style={{...styles.button,...props.style}}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
  
 

  return <TouchableOpacity activeOpacity={0.7} onPress={props.onPress}>{content}</TouchableOpacity>;
};

const styles = StyleSheet.create({
  button: {
    padding: 16,
    width: 230,
    alignItems: "center",
    borderRadius:35,
    borderWidth:1,
    overflow:'hidden'
  },
  text: {
    color: "white",
    fontSize: 24,
  }
});

export default Buttonbg;
