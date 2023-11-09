import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const Context = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInGoogle = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      const userEmail = currentUser?.email || user.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        axios.post('https://assignment-11-server-nine-psi.vercel.app/jwt', loggedUser, { withCredentials: true })
          .then(res => {
          console.log(res.data);
        })
      }
      else {
        axios.post('https://assignment-11-server-nine-psi.vercel.app/logout', loggedUser, { withCredentials: true })
          .then(res => {
          console.log(res.data);
        })
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const values = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    signInGoogle,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default Context;
