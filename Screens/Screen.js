import React from "react";
import { View, Text, StyleSheet, Image, } from "react-native";
import Buttonbg from "../Components/signin";
import Colors from "../Constants/Colors";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../Components/headerbutton";



class HomeScreen extends React.Component {
  render() {
    this.props.navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="menu" iconName="menu" onPress={() => {}} />
        </HeaderButtons>
      )
    });
    return (
      <View style={styles.Container}>
        <Image
          source={require("../assets/black.jpg")}
          style={{ width: "100%", height: 200 }}
        />

        <View style={styles.TitleContainer}>
          <Text style={styles.Text}>Trending books</Text>
        </View>

        <View style={styles.trending}>
          
        </View>
        <View style={{ alignItems: "center", marginTop: "10%" }}>
          <Buttonbg
            text="Share"
            style={styles.Share}
            onPress={() => {}}
          ></Buttonbg>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  Text: {
    fontSize: 25,
    color: Colors.accent
  },
  Discover: {
    marginTop: 14
  },
  TitleContainer: {
    margin: 20
  },
  trending: {
    flexDirection: "row",
    margin: 10
  },
  Categories: {
    flexDirection: "row",
    margin: 10
  },
  Share: {
    borderColor: Colors.primary
  }
});

export default HomeScreen;
