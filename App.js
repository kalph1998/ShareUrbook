import React from "react";
import { StyleSheet, View,Text,FlatList } from "react-native";
import BooksNavigator from './Navigation/ScreensNavigator';


class App extends React.Component{
  render(){
    return(
        <BooksNavigator />
    )
  }
}

export default App;
