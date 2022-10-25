import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-12 lg:grid-cols-2 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    <div className="overflow-hidden transition-shadow duration-300 bg-slate-700 text-white rounded">
                        <Link to="" aria-label="Article">
                            <img
                                src="https://www.keycdn.com/img/support/cors.png"
                                className="object-cover w-full h-64 rounded"
                                alt=""
                            />
                        </Link>
                        <div className="p-5">
                            <p className="mb-2 text-xs font-semibold uppercase">
                                13 Jul 2020
                            </p>
                            <Link
                                to=""
                                aria-label="Article"
                                className="inline-block mb-3 text-red-300 transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                <p className="text-2xl font-bold leading-5">What is CORS used for?</p>
                            </Link>
                            <p className="mb-4">
                                Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
                            </p>
                            <div className="flex space-x-4">
                                <Link
                                    to=""
                                    aria-label="Likes"
                                    className="flex items-starttransition-colors duration-200 hover:text-deep-purple-accent-700 group"
                                >
                                    <div className="mr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-5 h-5 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                        >
                                            <polyline
                                                points="6 23 1 23 1 12 6 12"
                                                fill="none"
                                                strokeMiterlimit="10"
                                            />
                                            <path
                                                d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeMiterlimit="10"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-semibold">7.4K</p>
                                </Link>
                                <Link
                                    to=""
                                    aria-label="Comments"
                                    className="flex items-start transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                                >
                                    <div className="mr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            className="w-5 h-5 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                        >
                                            <polyline
                                                points="23 5 23 18 19 18 19 22 13 18 12 18"
                                                fill="none"
                                                strokeMiterlimit="10"
                                            />
                                            <polygon
                                                points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeMiterlimit="10"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-semibold">81</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden transition-shadow duration-300 bg-slate-700 text-white rounded">
                        <Link to="" aria-label="Article">
                            <img
                                src="https://firebasetutorials.com/wp-content/uploads/2019/12/Why-firebase-is-used-1024x680.png"
                                className="object-cover w-full h-64 rounded"
                                alt=""
                            />
                        </Link>
                        <div className="p-5">
                            <p className="mb-2 text-xs font-semibold uppercase">
                                4 Nov 2020
                            </p>
                            <Link
                                to=""
                                aria-label="Article"
                                className="inline-block mb-3 text-red-300 transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                <p className="text-2xl font-bold leading-5">Why are you using Firebase?</p>
                            </Link>
                            <p className="mb-4">
                                Thanks to Firebase's easy-to-use SDK, ready-made UI libraries, and backend services, it is possible to set up the whole authentication process in just a couple of minutes. Firebase allows users to authenticate with their phone number, email, Google, and Facebook accounts (more options can be found here).
                            </p>
                            <div className="flex space-x-4">
                                <Link
                                    to=""
                                    aria-label="Likes"
                                    className="flex items-start transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                                >
                                    <div className="mr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-5 h-5 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                        >
                                            <polyline
                                                points="6 23 1 23 1 12 6 12"
                                                fill="none"
                                                strokeMiterlimit="10"
                                            />
                                            <path
                                                d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeMiterlimit="10"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-semibold">7.4K</p>
                                </Link>
                                <Link
                                    to=""
                                    aria-label="Comments"
                                    className="flex items-start transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                                >
                                    <div className="mr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            className="w-5 h-5 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                        >
                                            <polyline
                                                points="23 5 23 18 19 18 19 22 13 18 12 18"
                                                fill="none"
                                                strokeMiterlimit="10"
                                            />
                                            <polygon
                                                points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeMiterlimit="10"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-semibold">81</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden transition-shadow duration-300 bg-slate-700 text-white rounded">
                        <Link to="" aria-label="Article">
                            <img
                                src="https://images.pexels.com/photos/2123755/pexels-photo-2123755.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                className="object-cover w-full h-64 rounded"
                                alt=""
                            />
                        </Link>
                        <div className="p-5">
                            <p className="mb-2 text-xs font-semibold uppercase">
                                28 Dec 2020
                            </p>
                            <Link
                                to=""
                                aria-label="Article"
                                className="inline-block mb-3 text-red-300 transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                <p className="text-2xl font-bold leading-5">
                                    Explore the beautiful
                                </p>
                            </Link>
                            <p className="mb-4">
                                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                                consequuntur magni voluptatem doloremque.
                            </p>
                            <div className="flex space-x-4">
                                <Link
                                    to=""
                                    aria-label="Likes"
                                    className="flex items-start transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                                >
                                    <div className="mr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-5 h-5 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                        >
                                            <polyline
                                                points="6 23 1 23 1 12 6 12"
                                                fill="none"
                                                strokeMiterlimit="10"
                                            />
                                            <path
                                                d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeMiterlimit="10"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-semibold">7.4K</p>
                                </Link>
                                <Link
                                    to=""
                                    aria-label="Comments"
                                    className="flex items-start transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                                >
                                    <div className="mr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            className="w-5 h-5 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                        >
                                            <polyline
                                                points="23 5 23 18 19 18 19 22 13 18 12 18"
                                                fill="none"
                                                strokeMiterlimit="10"
                                            />
                                            <polygon
                                                points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeMiterlimit="10"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-semibold">81</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden transition-shadow duration-300 bg-slate-700 text-white rounded">
                        <Link to="" aria-label="Article">
                            <img
                                src="https://images.pexels.com/photos/2123755/pexels-photo-2123755.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                className="object-cover w-full h-64 rounded"
                                alt=""
                            />
                        </Link>
                        <div className="p-5">
                            <p className="mb-2 text-xs font-semibold uppercase">
                                28 Dec 2020
                            </p>
                            <Link
                                to=""
                                aria-label="Article"
                                className="inline-block mb-3 text-red-300 transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                <p className="text-2xl font-bold leading-5">
                                    Explore the beautiful
                                </p>
                            </Link>
                            <p className="mb-4">
                                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                                consequuntur magni voluptatem doloremque.
                            </p>
                            <div className="flex space-x-4">
                                <Link
                                    to=""
                                    aria-label="Likes"
                                    className="flex items-start transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                                >
                                    <div className="mr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-5 h-5 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                        >
                                            <polyline
                                                points="6 23 1 23 1 12 6 12"
                                                fill="none"
                                                strokeMiterlimit="10"
                                            />
                                            <path
                                                d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeMiterlimit="10"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-semibold">7.4K</p>
                                </Link>
                                <Link
                                    to=""
                                    aria-label="Comments"
                                    className="flex items-start transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                                >
                                    <div className="mr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            className="w-5 h-5 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                        >
                                            <polyline
                                                points="23 5 23 18 19 18 19 22 13 18 12 18"
                                                fill="none"
                                                strokeMiterlimit="10"
                                            />
                                            <polygon
                                                points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeMiterlimit="10"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-semibold">81</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;