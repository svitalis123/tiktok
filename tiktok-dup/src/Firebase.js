import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC0uTDi0IRKMMnb98gt4DgrtTy-8-ViJ7M",
    authDomain: "tiktok-dup.firebaseapp.com",
    projectId: "tiktok-dup",
    storageBucket: "tiktok-dup.appspot.com",
    messagingSenderId: "362304646054",
    appId: "1:362304646054:web:36cedb41399cc03ad73d67"
  };
   const firebaseapp=firebase.initializeApp(firebaseConfig)
   const db=firebaseapp.firestore();

   export default db;