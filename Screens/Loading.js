import React from 'react';
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native';
import  firebaseAuth  from '../Components/firebase'
export default class Loading extends React.Component {
render() {
return (
<View style={styles.container}>
 <Text>Loading</Text>
 <ActivityIndicator size="large" />
</View>
)}
}
const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
}
})
