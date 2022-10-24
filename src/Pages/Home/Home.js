import React from 'react';
import image from '../../image/bgImg.png';

const Home = () => {
    return (
        <div>
            <div className="relative home">
                <img
                    src={image}
                    className="absolute inset-0 object-cover w-full h-full"
                    alt=""
                />
                <div className="relative home bg-gray-900 bg-opacity-75">
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="flex flex-col items-center justify-between xl:flex-row">
                            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                    We will <br className="hidden md:block" />
                                    <span className=' text-rose-700'>Learn Programming</span>
                                </h2>
                                <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                                    quae.
                                </p>
                            </div>
                            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                                <img className='bgImg border-spacing-4' src="https://csifac.mans.edu.eg/images/design/it.gif" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;