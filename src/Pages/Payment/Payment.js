import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const Payment = () => {
    const course = useLoaderData();
    const handelFormSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const Taka = form.Taka.value;
        const password = form.password.value;
        form.reset();
        toast.success('Congratulations');
    }
    return (
        <div>
            <div className=" bg-slate-700 rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    {course.name}
                </h3>
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    Moony Payment
                </h3>
                <form onSubmit={handelFormSubmit}>
                    <div className="mb-1 sm:mb-2">
                        <label
                            htmlFor="firstName"
                            className="inline-block mb-1 font-medium"
                        >
                            Taka
                        </label>
                        <input
                            placeholder="Taka"
                            required
                            type="number"
                            className="flex-grow text-black w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                            name="Taka"
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
                    <div className="mt-4 mb-2 sm:mb-4">
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-rose-700 hover:bg-rose-800 
                                                 focus:shadow-outline focus:outline-none"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Payment;