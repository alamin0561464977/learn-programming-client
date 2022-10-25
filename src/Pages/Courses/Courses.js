import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import LeftSiteNev from '../Share/LeftSiteNev/LeftSiteNev';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div>
            <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 lg:px-2 lg:py-">
                <div className="max-w-xl mb-3 md:mx-auto sm:text-center lg:max-w-2xl md:mb-5">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-green-500 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="bebc38d1-bf72-4c77-a073-f0fe5abe0753"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#bebc38d1-bf72-4c77-a073-f0fe5abe0753)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                        </span>
                        We will Learn Programming
                    </h2>
                </div>
                <div className="grid gap-2 row-gap-2 lg:grid-cols-6">
                    <LeftSiteNev courses={courses}></LeftSiteNev>
                    <div className="sm:mx-auto col-span-4 sm:text-center">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;