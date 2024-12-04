import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('')
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logoutUser = ()=>{
    return signOut(auth)
  }

  const userUpdateProfile = (profile) =>{
    return updateProfile(auth.currentUser, profile)
  }

  const authInfo = {
    createUser,
    loginUser,
    loginWithGoogle,
    user,
    setUser,
    logoutUser,
    userUpdateProfile,
    error,
    setError
  };

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged (auth, (currentuser)=>{
        if(currentuser){
            setUser(currentuser)
        }else{
            setUser(null)
        }
    })
    return ()=>{
        unsubscribe()
    }
  },[])

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
