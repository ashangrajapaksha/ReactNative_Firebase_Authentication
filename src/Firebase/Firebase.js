import firebase from 'firebase';


var firebaseConfig = {
  apiKey: 'AIzaSyDInRx6QfhAXXp5qER-tYuZYKm2oeA-y4Q',
  authDomain: 'mynewapp-b383a.firebaseapp.com',
  databaseURL: 'https://mynewapp-b383a.firebaseio.com',
  projectId: 'mynewapp-b383a',
  storageBucket: 'mynewapp-b383a.appspot.com',
  messagingSenderId: '901497731120',
  appId: '1:901497731120:web:1fe1b5961faf65993f15f5',
};

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;