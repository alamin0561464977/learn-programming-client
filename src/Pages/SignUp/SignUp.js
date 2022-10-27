import { getAuth, sendEmailVerification, updateProfile } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext/UserContext';
import { app } from '../../firebase/firebase.init';

const auth = getAuth(app);

const SignUp = () => {
    const { signUp } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handelFormSubmit = e => {
        e.preventDefault();
        setError('');
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        signUp(email, password)
            .then(({ user }) => {
                updateProfile(auth.currentUser, {
                    displayName: `${name}`, photoURL: `${photoUrl}`
                }).then(() => {
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            alert('Please Check You Gmail(spam) and Verify Email Then Reload website')
                            navigate('/');
                        });
                }).catch((error) => {
                    setError(error.message);
                });
            })
            .catch(error => {
                setError(error.message);
            })
        form.reset();
    }
    return (
        <div>
            <div className="relative">
                <img
                    src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    className="absolute inset-0 object-cover w-full h-full"
                    alt=""
                />
                <div className="relative bg-gray-900 bg-opacity-75">
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="flex flex-col items-center justify-between xl:flex-row">
                            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                    We will <br className="hidden md:block" />
                                    <span className=' text-rose-700'>Learn Programming</span>
                                </h2>
                                <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                                    (We will Learn Programming) is a freemium educational website for learning coding online.(We will Learn Programming) offers courses covering all aspects of web development.
                                </p>
                            </div>
                            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                                <div className=" bg-slate-700 rounded shadow-2xl p-7 sm:p-10">
                                    <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                        Sign in
                                    </h3>
                                    <form onSubmit={handelFormSubmit}>
                                        <div className="mb-1 sm:mb-2">
                                            <label
                                                htmlFor="name"
                                                className="inline-block mb-1 font-medium"
                                            >
                                                You Name
                                            </label>
                                            <input
                                                placeholder="You Name"
                                                required
                                                type="text"
                                                className="flex-grow text-black w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                name="name"
                                            />
                                        </div>
                                        <div className="mb-1 sm:mb-2">
                                            <label
                                                htmlFor=""
                                                className="inline-block mb-1 font-medium"
                                            >
                                                Photo URL
                                            </label>
                                            <input
                                                placeholder="Photo URL"
                                                type="text"
                                                className="flex-grow text-black w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                name="photoUrl"
                                            />
                                        </div>
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
                                        <p className="font-bold text-red-500">
                                            {error}
                                        </p>
                                        <div className="mt-4 mb-2 sm:mb-4">
                                            <button
                                                type="submit"
                                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-rose-700 hover:bg-rose-800 
                                                 focus:shadow-outline focus:outline-none"
                                            >
                                                Sign Up
                                            </button>
                                        </div>
                                        <Link to='/sign-in' className="text-xs text-blue-600 sm:text-sm">
                                            Sign in
                                        </Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;