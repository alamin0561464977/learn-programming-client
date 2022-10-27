import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Course from "../Pages/Courses/Course";
import CourseDetail from "../Pages/Courses/CourseDetail";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Home/Home";
import Payment from "../Pages/Payment/Payment";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRouts from "./PrivateRouts";

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
                loader: async () => fetch('https://learn-programming-server-two.vercel.app/courses'),
                element: <Courses></Courses>,
                children: [
                    {
                        path: '',
                        loader: async () => fetch('https://learn-programming-server-two.vercel.app/courses'),
                        element: <Course></Course>
                    },
                    {
                        path: 'course-detail/:id',
                        loader: async ({ params }) => fetch(`https://learn-programming-server-two.vercel.app/course-detail/${params.id}`),
                        element: <CourseDetail></CourseDetail>
                    },
                    {
                        path: 'course-detail/:id/payment',
                        loader: async ({ params }) => fetch(`https://learn-programming-server-two.vercel.app/course-detail/${params.id}`),
                        element: <PrivateRouts><Payment></Payment></PrivateRouts>
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
            },
            {
                path: 'blog',
                element: <Blogs></Blogs>
            }
        ]
    }
])