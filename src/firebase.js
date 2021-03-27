import firebase from "firebase"

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBNERNJqJPoeQG5dJX6bdGgjFLxaO_85_8",
    authDomain: "facebook-clone-v2-87118.firebaseapp.com",
    projectId: "facebook-clone-v2-87118",
    storageBucket: "facebook-clone-v2-87118.appspot.com",
    messagingSenderId: "476645502482",
    appId: "1:476645502482:web:fd49dc96e7e4f0c2e0f2cb",
    measurementId: "G-RHT0T71JW3"
});

const auth = firebase.auth();
const db = firebaseConfig.firestore();
const storage = firebase.storage();
export { auth, db, storage };