import { NavigationContainer } from '@react-navigation/native'
import React from "react";
import {createStackNavigator} from '@react-navigation/stack'
import WelcomeScreen from "../Screens/welcomeScreen";
import LoginScreen from "../Screens/loginScreen";
import HomeScreen from '../Screens/Screen';
import Colors from '../Constants/Colors'


const Stack = createStackNavigator();

const BookStack = () =>{
  return(
  <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name='Welcome' component={WelcomeScreen} options={{headerShown:false}} />
    <Stack.Screen name='Home' component={HomeScreen} options={{title:'Discover',headerStyle:{backgroundColor:Colors.primary}}}  />
    <Stack.Screen name='SignUp' component={LoginScreen} options={{headerStyle:{backgroundColor:Colors.primary}}} />

  </Stack.Navigator>
  </NavigationContainer>)
}

export default BookStack;

  