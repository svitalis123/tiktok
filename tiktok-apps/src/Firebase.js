import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDw7AC58qbZBzeSN4csyBLbTj_oDXkGnRM",
    authDomain: "tiktok-dcfb9.firebaseapp.com",
    projectId: "tiktok-dcfb9",
    storageBucket: "tiktok-dcfb9.appspot.com",
    messagingSenderId: "171970779495",
    appId: "1:171970779495:web:e39ac8870ccfaf1d6b77c2"
  };
  const firebaseapp=firebase.initializeApp(firebaseConfig);
  const db=firebaseapp.firestore();

  export default db