import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';

const Course = () => {
    const courses = useLoaderData();
    return (
        <div>
            <div className="px-4 py-16 mx-auto md:max-w-full md:px-24 lg:px-8 lg:py-2">
                <div className="grid gap-8 row-gap-5 lg:grid-cols-2">
                    {
                        courses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Course;