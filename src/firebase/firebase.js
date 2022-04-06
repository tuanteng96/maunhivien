import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAFBX0jiwETEQTC9uoU3UTxdEsYW-1S18c",
    authDomain: "maunhivien.firebaseapp.com",
    projectId: "maunhivien",
    storageBucket: "maunhivien.appspot.com",
    messagingSenderId: "900600598650",
    appId: "1:900600598650:web:bda780f29108378ca82bc3",
    measurementId: "G-N8Z7C3441F"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
export { auth, database };