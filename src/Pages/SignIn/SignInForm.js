import React, { useContext, useState } from 'react';
import { FaGithub, FaGofore } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/UserContext/UserContext';

const SignInForm = ({ signInComponent }) => {
    const { signIn, googleSignIn, gitHubSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handelFormSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(({ user }) => {
                if (signInComponent) {
                    navigate('/');
                    if (user?.emailVerified || user?.email === null) {
                        toast.success('Sign in Successful!!!')
                    }
                }
            })
            .catch(error => {
                setError(error.message);
            })
        form.reset();
        setError('');
    }

    return (
        <div className=" bg-slate-700 rounded shadow-2xl p-7 sm:p-10">
            <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                Sign in
            </h3>
            <form onSubmit={handelFormSubmit}>
                <div className="mb-1 sm:mb-2">
                    <label
                        htmlFor="firstName"
                        className="inline-block mb-1 font-medium"
                    >
                        Email
                    </label>
                    <input
                        placeholder="Email"
                        required
                        type="email"
                        className="flex-grow text-black w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        name="email"
                    />
                </div>
                <div className="mb-1 sm:mb-2">
                    <label
                        htmlFor="password"
                        className="inline-block mb-1 font-medium"
                    >
                        Password
                    </label>
                    <input
                        placeholder="Password"
                        required
                        type="text"
                        className="flex-grow text-black w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        name="password"
                    />
                </div>
                <p className=" text-sm font-bold text-red-500">
                    {error}
                </p>
                <div className="mt-4 mb-2 sm:mb-4">
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-rose-700 hover:bg-rose-800 
                                                 focus:shadow-outline focus:outline-none"
                    >
                        Sign in
                    </button>
                </div>
                <Link to='/sign-up' className="text-xs text-gray-50 sm:text-sm">
                    Sign Up
                </Link>
            </form>
            <div className="divider">OR</div>
            <div className="mt-4m flex gap-3 mb-2 sm:mb-4">
                <button
                    onClick={googleSignIn}
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-zinc-700 hover:bg-zinc-800 
                                                 focus:shadow-outline focus:outline-none"
                >
                    <FaGofore className=' text-red-600 mr-2' /> Google
                </button>
                <button
                    onClick={gitHubSignIn}
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-black hover:bg-zinc-800 
                                                 focus:shadow-outline focus:outline-none"
                >
                    <FaGithub className=' mr-2' /> GitHub
                </button>
            </div>
        </div>
    );
};

export default SignInForm;