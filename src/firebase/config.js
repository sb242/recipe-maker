import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQ8odjxBW-ENlCSR1EBXAnILRvjAJp_Cw",
  authDomain: "cooking-ninja-site-199d0.firebaseapp.com",
  projectId: "cooking-ninja-site-199d0",
  storageBucket: "cooking-ninja-site-199d0.appspot.com",
  messagingSenderId: "928307331281",
  appId: "1:928307331281:web:58c073ffab37498d1b05f0",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
