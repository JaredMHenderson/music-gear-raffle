import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyAyPlniB3dWGNGbj6WQry2K3aBh8c5Ycqw",
    authDomain: "music-gear-raffle.firebaseapp.com",
    databaseURL: "https://music-gear-raffle.firebaseio.com",
    projectId: "music-gear-raffle",
    storageBucket: "music-gear-raffle.appspot.com",
    messagingSenderId: "12287784229"
  };
  var fire = firebase.initializeApp(config);
  export default fire;