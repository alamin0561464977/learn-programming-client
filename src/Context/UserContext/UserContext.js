import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../../firebase/firebase.init';


export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState({});

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const authInfo = { user, signUp, signIn };
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;