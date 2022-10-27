import React from 'react';
import { useContext } from 'react';
import { FaGithub, FaGofore } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext/UserContext';
import SignIn from '../Pages/SignIn/SignIn';
import SignInForm from '../Pages/SignIn/SignInForm';

const PrivateRouts = ({ children }) => {
    const { user, loader } = useContext(AuthContext);

    if (user?.emailVerified || user?.email === null) {
        return children;
    }
    else if (loader) {
        return <h1>Loading...</h1>
    }
    else {
        return <SignInForm className='relative'></SignInForm>
    }
};

export default PrivateRouts;