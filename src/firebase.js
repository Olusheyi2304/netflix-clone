import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { addDoc, getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyD7h_oE_sE2jdz55ENILY5oudzV2OX0qKs",
  authDomain: "netflix-clone-8a695.firebaseapp.com",
  projectId: "netflix-clone-8a695",
  storageBucket: "netflix-clone-8a695.firebasestorage.app",
  messagingSenderId: "909152260456",
  appId: "1:909152260456:web:632b648b7a23b46f3386dd",
};

/// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

//For SignUp
const signUp = async (name, email, password) => {
  try {
    //from this response we will find the user's details, that is stored in the user property.
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    //we have created user in our FireBase(FB), next we will store the user in the FireStoreDB. For that we will use addDoc.
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    //catch block
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

//For SignIn
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

//For logout
const logout = () => {
  signOut(auth);
};

export { auth, db, signUp, login, logout };
