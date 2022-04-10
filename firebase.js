import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, getAuth } from "firebase/auth"
import {
  getFirestore,
    query,
     getDocs,
  collection,
  where,
    addDoc} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCIrnM4eHQBl6pMcFaA753OnuZ6JZgmAdk",
    authDomain: "whiteboard-startup-dev.firebaseapp.com",
    projectId: "whiteboard-startup-dev",
    storageBucket: "whiteboard-startup-dev.appspot.com",
    messagingSenderId: "323519324250",
    appId: "1:323519324250:web:df1b0cd4ef3e5339f47863"
  };


const app = initializeApp(firebaseConfig)


const auth = getAuth(app);

const db = getFirestore(app);
export default app


const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("success!!", auth.currentUser)
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  export {
    auth,
    db,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
  };