import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/UserContext/UserContext';
import SignIn from '../Pages/SignIn/SignIn';

const PrivateRouts = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    if (user?.emailVerified) {
        return children;
    }
    else if (loader) {
        return <h1>Loading...</h1>
    }
    else {
        return <SignIn></SignIn>
    }
};

export default PrivateRouts;