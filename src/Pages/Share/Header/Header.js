import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/UserContext/UserContext';

const Header = () => {
    const { user, handelSignOut } = useContext(AuthContext);


    return (
        <div>
            <div className="bg-gray-900">
                <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="relative lg:flex items-center justify-between">
                        <Link
                            to="/"
                            aria-label="Company"
                            title="Company"
                            className="inline-flex sm:d-none items-center"
                        >
                            <img className=' w-12' src="https://d1hbpr09pwz0sk.cloudfront.net/logo_url/learn-programming-academy-e90f02dd" alt="" />
                            <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                                We will Learn Programming
                            </span>
                        </Link>
                        <ul className="items-center hidden space-x-4 lg:flex">
                            <li>
                                <Link
                                    to="/"
                                    aria-label="Our product"
                                    title="Our product"
                                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/courses"
                                    aria-label="Our product"
                                    title="Our product"
                                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    Courses
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    aria-label="Our product"
                                    title="Our product"
                                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <Link
                                    to="/blog"
                                    aria-label="Product pricing"
                                    title="Product pricing"
                                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    aria-label="About us"
                                    title="About us"
                                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    About us
                                </a>
                            </li>
                        </ul>
                        <ul className="items-center hidden space-x-2 lg:flex">
                            <label className="swap swap-rotate">
                                <input type="checkbox" />
                                <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                                <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                            </label>
                            {
                                user?.emailVerified || user?.email ===
                                    null ?
                                    <>
                                        <li>
                                            <button
                                                onClick={handelSignOut}
                                                className="inline-flex items-center justify-center h-12 px-2 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                                aria-label="Sign up"
                                                title="Sign up"
                                            >
                                                Sign Out
                                            </button>
                                        </li>
                                        <li className='menu'>
                                            <li tabIndex={0}>

                                                <Link>
                                                    <div className="avatar">
                                                        <div className=" w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                            <img src={user?.photoURL ? user?.photoURL : 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png'} />
                                                        </div>
                                                    </div>
                                                </Link>
                                                <ul className="p-2 text-rose-700 bg-slate-600">
                                                    <li><a>{user?.displayName}</a></li>
                                                </ul>
                                            </li>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li>
                                            <Link
                                                to='/sign-in'
                                                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                                aria-label="Sign up"
                                                title="Sign up"
                                            >
                                                Sign in
                                            </Link>
                                            <Link
                                                to='/sign-up'
                                                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                                aria-label="Sign up"
                                                title="Sign up"
                                            >
                                                Sign Up
                                            </Link>
                                        </li>
                                    </>
                            }
                        </ul>
                        <div className="lg:hidden">
                            <nav>
                                <ul class="space-y-4 flex items-center content-center">
                                    <li>
                                        <Link
                                            to="/"
                                            aria-label="Our product"
                                            title="Our product"
                                            className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 my-0 px-2"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/courses"
                                            aria-label="Our product"
                                            title="Our product"
                                            className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 my-0 px-2"
                                        >
                                            Courses
                                        </Link>
                                    </li>
                                    <li>
                                        <a
                                            href="/"
                                            aria-label="Our product"
                                            title="Our product"
                                            className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 my-0 px-2"
                                        >
                                            FAQ
                                        </a>
                                    </li>
                                    <li>
                                        <Link
                                            to="/blog"
                                            aria-label="Product pricing"
                                            title="Product pricing"
                                            className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 my-0 px-2"
                                        >
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <a
                                            href="/"
                                            aria-label="About us"
                                            title="About us"
                                            className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 my-0 px-2"
                                        >
                                            About us
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Header;