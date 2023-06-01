import firebase from 'firebase';
import 'firebase/database';

let firebaseConfig = {
  apiKey: 'AIzaSyCqaQCS5oIV9vMC47n36c6zOSN_0eM1bW0',
  authDomain: 'projetoestoque-d2276.firebaseapp.com',
  databaseURL: 'https://projetoestoque-d2276-default-rtdb.firebaseio.com',
  projectId: 'projetoestoque-d2276',
  storageBucket: 'projetoestoque-d2276.appspot.com',
  messagingSenderId: '584059978562',
  appId: '1:584059978562:web:535b68441c3d430c8bbedb',
  measurementId: 'G-B142X3JJHH',
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
