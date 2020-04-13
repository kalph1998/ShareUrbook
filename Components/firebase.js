import * as firebase from 'firebase'

const config={
    apiKey: "AIzaSyA4EtR3DEWf3xS51ipTlxJYL0fXkV3cAJE",
    authDomain: "shareurbook-91fd6.firebaseapp.com",
    databaseURL: "https://shareurbook-91fd6.firebaseio.com",
    projectId: "shareurbook-91fd6",
    storageBucket: "shareurbook-91fd6.appspot.com",
    messagingSenderId: "821838986228",
    appId: "1:821838986228:web:d3878913fe8de4074c57a1",
    measurementId: "G-5JDQ123V2C"

}
   
const firebaseApp=  firebase.initializeApp(config);
const firebaseAuth = firebaseApp.auth()
  
export default firebaseAuth