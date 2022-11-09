// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { getDatabase, onValue, ref, set, connectDatabaseEmulator } from 'firebase/database';
import { useEffect, useState } from "react";

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
const database = getDatabase();

export const useData = (path, transform) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const dbRef = ref(database, path);
    const devMode = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
    if (devMode) { console.log(`loading ${path}`); }
    return onValue(dbRef, (snapshot) => {
      const val = snapshot.val();
      if (devMode) { console.log(val); }
      setData(transform ? transform(val) : val);
      setLoading(false);
      setError(null);
    }, (error) => {
      setData(null);
      setLoading(false);
      setError(error);
    });
  }, [path, transform]);

  return [data, loading, error];
};

export const updateData = (path, value) => {
  set(ref(database, path), value);
}

export  const auth = getAuth(app);

const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
          localStorage.setItem("userId", result.user.uid);
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
  
if (!windows.EMULATION && import.meta.env.REACT_APP_EMULATE) {
  connectAuthEmulator(auth, "http://127.0.0.1:9099");
  connectDatabaseEmulator(database, "127.0.0.1", 9000);

  signInWithCredential(auth, GoogleAuthProvider.credential(
    '{"sub": "qEvli4msW0eDz5mSVO6j3W7i8w1k", "email": "tester@gmail.com", "displayName":"Test User", "email_verified": true}'
  ));
  
  windows.EMULATION = true;
}