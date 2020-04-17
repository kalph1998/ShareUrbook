import React,{useEffect,useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import {DrawerItemList} from '@react-navigation/drawer'




export default Sidebar = props => {
  

  return (
    <ScrollView>
      <ImageBackground
        source={require("../assets/Background.jpg")}
        style={{ width: undefined, padding: 30, paddingTop: 40 }}
      >
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/women/17.jpg" }}
          style={styles.profile}
        />
        <Text style={styles.name}>User</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.followers}>750 Followers</Text>
          <MaterialIcons
            name="people"
            size={16}
            color="rgba(255,255,255,0.9)"
          />
        </View>
      </ImageBackground>
      <View style={styles.container}>
      <DrawerItemList {...props}  />

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1
    },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#fff"
  },
  name: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "800",
    marginVertical: 8
  },
  followers:{
    color:'rgba(255,255,255,0.8)',
    fontSize:13,
    marginRight:4
  }

});
