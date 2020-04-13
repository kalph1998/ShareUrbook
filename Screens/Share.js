import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const ShareBook =()=>{
    return(
        <View style={styles}>
            <Text>
                hello world
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }

})

export default ShareBook;