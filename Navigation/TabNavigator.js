import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import ShareScreen from "../Screens/Share";
import HomeScreen from "../Screens/store/BooksOverview";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../Constants/Colors";

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          let iconName;
          if (route.name === "Rent") {
            iconName = focused ? "home-circle" : "home";
          } else if (route.name === "Share") {
            iconName = focused ? "share-outline" : "share";
          }
          return (
            <MaterialCommunityIcons
              name={iconName}
              size={size}
              color={Colors.primary}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor:'black'
      }}
    >
      <Tab.Screen name="Rent" component={HomeScreen} />
      <Tab.Screen name="Share" component={ShareScreen} />
    </Tab.Navigator>
  );
};
export default HomeTab
