import React, { useEffect, useState } from 'react';
import AuthContext from './Authcontext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.init';


const AuthProvider = ({ children }) => {

    const googleProvider = new GoogleAuthProvider()

    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)

    const signupWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        return signOut(auth)
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    const authInfo = {
        signupWithEmailAndPassword,
        loginUser,
        user,
        setUser,
        signOutUser,
        updateUserProfile,
        googleLogin,
        setLoading,
        loading
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log("---->", currentUser);
        })
        setLoading(false)
        return () => {
            unsubscribe()
        }
    })

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;