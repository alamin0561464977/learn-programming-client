import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const { name, image, id, price } = course;
    return (
        <div>
            <Link to={`course-detail/:${id}`} aria-label="View Item">
                <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <img
                        className="object-cover w-full h-56 md:h-64 xl:h-80"
                        src={image}
                        alt=""
                    />
                    <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                        <p className="text-xl font-medium tracking-wide text-white">
                            {name}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CourseCard;