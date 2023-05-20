import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth";
import app from '../firebase/firebase.config';
import { signInWithPopup } from 'firebase/auth';
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, provider)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=>{
            console.log("error", error.message);
        })
    }



     //update profile
   
     const userProfile = (user,name,photo)=>{
        updateProfile(user,{
            displayName: name,
            photoURL: photo
        })
    }
    


    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])


    const authInfo ={
        user,
        loading,
        createUser,
        signIn,
        logOut,
        handleGoogleSignIn,
        userProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;