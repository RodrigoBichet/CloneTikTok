import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyBai-3vUKNIBBjccErItY6GQW8L0PMxRos",
    authDomain: "tiktok----clone.firebaseapp.com",
    projectId: "tiktok----clone",
    storageBucket: "tiktok----clone.appspot.com",
    messagingSenderId: "761845990674",
    appId: "1:761845990674:web:ec8e7d38347cb949c65fcb",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
