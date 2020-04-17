import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import SideBar from './SIdebar'
import { MaterialIcons } from "@expo/vector-icons";
import Colors from '../Constants/Colors'
import HomeStack from './ScreensNavigator'
const SideDrawer = createDrawerNavigator();

const SideDrawe =()=>{
    return(
     
        <SideDrawer.Navigator
        drawerContentOptions={{
          activeBackgroundColor: "rgba(193,123,243,0.2)",
          activeTintColor:Colors.primary,
          itemStyle:{
            borderRadius:15
          }
        }}
        
        drawerContent={props => <SideBar {...props} />}
      >
        <SideDrawer.Screen
          name="Rent"
          component={HomeStack}
          options={{    
            drawerIcon: () => (
              <MaterialIcons
                name="restaurant"
                Size={18}
                color={Colors.accent}
              />
            )
          }}
        />

        </SideDrawer.Navigator>
     
    )
}
export default SideDrawe