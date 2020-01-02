import React from 'react';
import { StyleSheet, Text, View ,ImageBackground,Image} from 'react-native';
import bgimage from './assets/background.png'
import logo from './assets/logo.png'



export default function App() {
  return (
    <ImageBackground source={bgimage} style={styles.backGroundContainer}>
      
      <View style={styles.logoContainer}>
      <Image source={logo} style={styles.logo} />
      </View>
      
      <View style={styles.textContainer}>
      <Text style={styles.welcome}>Welcome,Amigo</Text>
        
      </View>



    </ImageBackground>
   
  );
}

const styles = StyleSheet.create({
  backGroundContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:null,
    height:null,
  },
  logoContainer:{

    alignSelf:'flex-start',
    position:'relative',
    marginLeft:10,
  },
  textContainer:{
    alignItems:'center'
  },
welcome:{
  fontSize:50,
  color: '#2f354b',
  textAlign: 'center',
  marginTop:  100,
  color:'white',
  
  

}
 
  
  
});
