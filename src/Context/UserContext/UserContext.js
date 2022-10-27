import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, GithubAuthProvider } from "firebase/auth";
import { app } from '../../firebase/firebase.init';
import { useEffect } from 'react';


export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState({});
    const [loader, setLoader] = useState(true);

    const signIn = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    };


    const signUp = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const googleSignIn = () => {
        setLoader(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider);
    };


    const gitHubSignIn = () => {
        setLoader(true);
        const gitHubProvider = new GithubAuthProvider();
        signInWithPopup(auth, gitHubProvider)
            .then(({ user }) => {
                console.log(user);
                setUser(user)
            })
            .catch(error => {
                console.log(error)
            })

    }
    const handelSignOut = () => {
        signOut(auth);
        console.log('alamin')
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoader(false);
        })
        return () => unsubscribe();
    }, [])

    const authInfo = {
        user,
        loader,
        signUp,
        signIn,
        googleSignIn,
        handelSignOut,
        gitHubSignIn
    };
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;