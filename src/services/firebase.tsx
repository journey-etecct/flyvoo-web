import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCFqBiVE7yS-jWdDB5LNS0-McDwPdO8svg",
    authDomain: "flyvoo.firebaseapp.com",
    databaseURL: "https://flyvoo-default-rtdb.firebaseio.com",
    projectId: "flyvoo",
    storageBucket: "flyvoo.appspot.com",
    messagingSenderId: "876266782253",
    appId: "1:876266782253:web:5c8e8eb45fff737b8482a4",
    measurementId: "G-CX03QR9M45"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;


