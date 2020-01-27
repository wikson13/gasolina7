import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBoAc2hkELCG0C1ZcKTdY5OO43qRyYd1O8',
  authDomain: 'gasolina-native.firebaseapp.com',
  databaseURL: 'https://gasolina-native.firebaseio.com',
  projectId: 'gasolina-native',
  storageBucket: 'gasolina-native.appspot.com',
  messagingSenderId: '805553007222',
  appId: '1:805553007222:web:c61be338e3e6ca7aea8d57',
};
const Firebase = firebase.initializeApp(config);
export default Firebase;
