// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { getDatabase, onValue, ref, update} from 'firebase/database';
const database = getDatabase(firebase);
import { useCallback, useEffect, useState } from 'react';

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

export const useDbData = (path) => {
    const [data, setData] = useState();
    const [error, setError] = useState(null);
  
    useEffect(() => (
      onValue(ref(database, path), (snapshot) => {
       setData( snapshot.val() );
      }, (error) => {
        setError(error);
      })
    ), [ path ]);
  
    return [ data, error ];
  };
  
  const makeResult = (error) => {
    const timestamp = Date.now();
    const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
    return { timestamp, error, message };
  };
  
  export const useDbUpdate = (path) => {
    const [result, setResult] = useState();
    const updateData = useCallback((value) => {
      update(ref(database, path), value)
      .then(() => setResult(makeResult()))
      .catch((error) => setResult(makeResult(error)))
    }, [database, path]);
  
    return [updateData, result];
  };
  