import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/UserContext/UserContext';
import NaveItem from './NaveItem';

const LeftSiteNev = ({ courses }) => {
    const { user } = useContext(AuthContext);
    return (
        <div className='col-span-2 bg-slate-900'>
            <div className="sm:mx-auto sm:text-center">
                <header>
                    <h1 className=' text-red-700'>{user?.name}</h1>
                </header>
                <main>
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                            <h2 className="max-w-lg mb-6 font-sans text-2xl font-bold leading-none tracking-tight text-gray-50 sm:text-2xl md:mx-auto">
                                <span className="relative inline-block">
                                    <span className="relative">The</span>
                                </span>{' '}
                                quick, brown fox jumps over a lazy dog
                            </h2>
                        </div>
                        <div className="max-w-lg space-y-3 sm:mx-auto lg:max-w-xl">
                            <div>
                                {
                                    courses.map(course => <NaveItem key={course.id} course={course}></NaveItem>)
                                }
                                <span className="text-gray-50 transition-colors duration-200 group-hover:text-white">
                                    Change the world by being yourself.
                                </span>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default LeftSiteNev;