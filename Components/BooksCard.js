import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback,ImageBackground } from "react-native";

const Card = props => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={{ ...styles.Card, ...props.style }}>
        <ImageBackground source={{uri:props.Image}} style={styles.Imagebg}  />

      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  Card: {
    height: 150,
    width: 101,
    elevation: 6,
    borderBottomColor: "black",
    backgroundColor: "white",
    borderRadius: 15,
    marginHorizontal: 10
  },
  Imagebg:{
    width:'100%',
    height:'100%',
    borderRadius:15,
    overflow:'hidden'
  }
});

export default Card;
