import { createContext } from "react";import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (auth, email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return ()=>{
      unsubscribe()
    }
  });
  return (
    <AuthContext.Provider value={{ signUp, user ,logout,login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
