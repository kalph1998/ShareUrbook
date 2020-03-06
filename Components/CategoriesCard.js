import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback,Text } from "react-native";
import {FontAwesome} from '@expo/vector-icons'
import Colors from '../Constants/Colors'

const CatCard = props => {
  const content = (<View style={{ ...styles.Card, ...props.style }}>
    {props.children}
  </View>);;

  return(
  <TouchableWithoutFeedback onPress={props.onPress} >{content}</TouchableWithoutFeedback>
  )
};

const styles = StyleSheet.create({
  Card: {
    height: 120,
    width: 101,
    elevation: 5,
    borderBottomColor: "black",
    backgroundColor: "white",
    borderRadius: 20,
    marginHorizontal: 10,
    justifyContent:'center',
    alignItems:'center'
  }
});

export default CatCard;

