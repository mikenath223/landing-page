import firebase from 'firebase/app';
import 'firebase/database';

// After loading JSON file to firsbase db then retrieve from database
var firebaseConfig = {
  apiKey: "AIzaSyAPM0b54TdRJxfUXaw1qb1S2ZHT3lnSyJs",
  authDomain: "landing-page-f4a27.firebaseapp.com",
  databaseURL: "https://landing-page-f4a27.firebaseio.com",
  projectId: "landing-page-f4a27",
  storageBucket: "landing-page-f4a27.appspot.com",
  messagingSenderId: "869233426046",
  appId: "1:869233426046:web:469cf83eb5b58117dfe22f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);




export const getQuestions = async () => {
  const snapshot = await firebase.database().ref('/questions/').once('value');
  const retrievedData = snapshot.val() || '';
  if (!retrievedData) {
    throw Error('There is an issue fetching from the database');
  }
  return retrievedData;
}