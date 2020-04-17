import React from "react";
import WelcomeScreen from "../Screens/welcomeScreen";
import LoginScreen from "../Screens/loginScreen";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../Constants/Colors";
import Signup from "../Screens/Signup";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../Components/headerbutton";
import Tab from "./TabNavigator";
import BookDetails from '../Screens/BookDetails'



const Stack = createStackNavigator();

const BookStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName='Welcome'>
      
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
          
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="menu"
                iconName="menu"
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              />
            </HeaderButtons>
          ),
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={LoginScreen}
        options={{ headerStyle: { backgroundColor: Colors.primary },
      headerTintColor:'white' }}
      />
      <Stack.Screen
        name="SignUp"
        component={Signup}
        options={{ headerStyle: { backgroundColor: Colors.primary },
      headerTintColor:'white' }}
      />
      <Stack.Screen
        name="BookD"
        component={BookDetails}
        options={{ headerStyle: { backgroundColor: Colors.primary },
      headerTintColor:'white' }}
      />
    </Stack.Navigator>
  );
};

export default BookStack;
