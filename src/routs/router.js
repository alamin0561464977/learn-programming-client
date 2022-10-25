import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Course from "../Pages/Courses/Course";
import CourseDetail from "../Pages/Courses/CourseDetail";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                loader: async () => fetch('http://localhost:5000/courses'),
                element: <Courses></Courses>,
                children: [
                    {
                        path: '',
                        loader: async () => fetch('http://localhost:5000/courses'),
                        element: <Course></Course>
                    },
                    {
                        path: 'course-detail/:id',
                        element: <CourseDetail></CourseDetail>
                    }
                ]
            },
            {
                path: 'sign-in',
                element: <SignIn></SignIn>
            },
            {
                path: 'sign-up',
                element: <SignUp></SignUp>
            }
        ]
    }
])