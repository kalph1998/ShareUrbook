import React from "react";
import WelcomeScreen from "../Screens/welcomeScreen";
import LoginScreen from "../Screens/loginScreen";
import {createStackNavigator} from '@react-navigation/stack'
import Colors from "../Constants/Colors";
import Signup from "../Screens/Signup";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../Components/headerbutton";
import HomeScreen from "../Screens/store/BooksOverview";
import {NavigationContainer} from '@react-navigation/native'
import Tab from './TabNavigator'



const Stack = createStackNavigator();

const BookStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Tab}
          options={{
            title: "ShareUrBook",
            headerStyle: { backgroundColor: Colors.primary },
            headerTintColor: "white",
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="local-grocery-store"
                  iconName="local-grocery-store"
                  onPress={() => {
                    props.navigation.navigate("Cart");
                  }}
                />
              </HeaderButtons>
            ),
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="menu" iconName="menu" onPress={() => {}} />
              </HeaderButtons>
            ),
            
            
          
          }}
        
        />
        <Stack.Screen
          name="SignUp"
          component={LoginScreen}
          options={{ headerStyle: { backgroundColor: Colors.primary } }}
        />
        <Stack.Screen
          name="Logup"
          component={Signup}
          options={{ headerStyle: { backgroundColor: Colors.primary } }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default BookStack;