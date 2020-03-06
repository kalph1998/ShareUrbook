import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";

const Card = props => {
  const content = <View style={{ ...styles.Card, ...props.style }}>

  </View>;

  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      {content}
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  Card: {
    height: 150,
    width: 101,
    elevation: 5,
    borderBottomColor: "black",
    backgroundColor: "white",
    borderRadius: 20,
    marginHorizontal: 10
  }
});

export default Card;
