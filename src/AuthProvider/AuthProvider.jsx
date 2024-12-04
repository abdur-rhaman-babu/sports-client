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
  const [loading, setLoading] = useState(true)

  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = () => {
    setLoading(true)
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
    setError,
    loading,
    setLoading
  };

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged (auth, (currentuser)=>{
        if(currentuser){
            setUser(currentuser)
        }else{
            setUser(null)
        }
        setLoading(false)
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
