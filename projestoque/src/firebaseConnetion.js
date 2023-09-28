import firebase from 'firebase';
import 'firebase/database';
import 'firebase/auth';
import initializeApp from 'firebase';

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

let app;
let storage;

// Initialize Firebase
if (!firebase.apps.length) {
  app = initializeApp(firebaseConfig);
}

export default app;
