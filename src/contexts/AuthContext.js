import React, { useContext, useState } from 'react';
import {
    auth,
    db,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
  }from "../../firebase";



const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()

    const signUp = (name, email, password) => registerWithEmailAndPassword(name, email, password)
  
    const value = {
        currentUser,
        signUp
    }

    
  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}
