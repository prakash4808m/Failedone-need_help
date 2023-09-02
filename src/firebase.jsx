import firebase from "firebase";
const firebaseConfig = {
apiKey: "AIzaSyAqfp89VetWzVyh8BarUAysMkjvQFbRgak",
authDomain: "bartalab-001.firebaseapp.com",
projectId: "bartalab-001",
storageBucket: "bartalab-001.appspot.com",
messagingSenderId: "626841295420",
appId: "1:626841295420:web:bac1619b92396f9b704139",
measurementId: "G-ZW92245JV5"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider}
export default db;