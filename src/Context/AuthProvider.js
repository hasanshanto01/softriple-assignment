import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    };

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const logOut = () => {
        return signOut(auth);
    };


    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('auth observer:', currentUser);
            setUser(currentUser);
        })

        return () => unsubscribe();

    }, []);


    const authInfo = {
        user,
        createUser,
        updateUser,
        logIn,
        googleLogIn,
        logOut

    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;