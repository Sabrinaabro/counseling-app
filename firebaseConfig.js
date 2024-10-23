// firebaseConfig.js
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDHXJWnb_Xbv_8BUiFPDcRQIma0Oh3l8AY',
  authDomain: 'counseling-app-28c44.firebaseapp.com',
  projectId: 'counseling-app-28c44',
  storageBucket: 'counseling-app-28c44.appspot.com',
  messagingSenderId: '51959456193',
  appId: '1:51959456193:android:32b3f5f3c8aab5ad708f40',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
