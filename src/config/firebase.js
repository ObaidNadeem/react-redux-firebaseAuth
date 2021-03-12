import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyAxER5npHOlyHTHzxTQgK1tFL8WtGLw_Zg",
    authDomain: "socialapp-33e0d.firebaseapp.com",
    databaseURL: "https://socialapp-33e0d.firebaseio.com",
    projectId: "socialapp-33e0d",
    storageBucket: "socialapp-33e0d.appspot.com",
    messagingSenderId: "423947895385",
    appId: "1:423947895385:web:e47995ee8f675afec62748",
    measurementId: "G-5BJMYJ2Z9D"
}

firebase.initializeApp(firebaseConfig)

export default firebase;