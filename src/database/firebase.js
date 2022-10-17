// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDjPhc3K5JrUQOIx4xsGHfX6q0fBLN_OW0",
    authDomain: "react-tutorial-74f38.firebaseapp.com",
    projectId: "react-tutorial-74f38",
    storageBucket: "react-tutorial-74f38.appspot.com",
    messagingSenderId: "1090028282744",
    appId: "1:1090028282744:web:69b3b7be213108b01cde8d",
    measurementId: "G-E55B4SRXPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);

const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            localStorage.setItem("userName", result.user.displayName);
        })
        .then(() => {
            window.location.reload(false);
        })
        .catch((err) => {
            console.log(err); 
        })
};

export const signOutWithGoogle = () => {
    localStorage.removeItem("userName");
    signOut(auth)
        .then(() => {
            window.location.reload(false);
        })
}