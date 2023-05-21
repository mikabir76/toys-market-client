import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../Firebase/firebase.config';
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, password)=>{
        loading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };
    const signIn = (email, password)=>{
        loading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = ()=>{
        loading(true)
        return signInWithPopup(auth, googleProvider)
    };
    const profileUpdate = (user, name, photo)=>{
        loading(true)
        return updateProfile(user, name, photo)
    };

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        });
        return ()=> unsubscribe()
    },[]);

    const logOut = ()=>{
        loading(true)
        return signOut(auth)
    }
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleLogin,
        profileUpdate,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;