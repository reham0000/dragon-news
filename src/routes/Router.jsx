import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import CategoryNews from "../Components/Pages/CategoryNews";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Components/Pages/Login";
import Register from "../Components/Pages/Register";
import NewsDetails from "../Components/Pages/NewsDetails";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "",
                element: <Navigate to={'/category/01'}></Navigate>,
            },
            {
                path: "/category/:id",
                element: <CategoryNews></CategoryNews>,
                loader: ({ params }) => 
                    fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            },
        ],
    },
    {
        path: "/news/:id",
        element: <NewsDetails></NewsDetails>,
        loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
        path:"/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>,
            },
            {
                path: '/auth/register',
                element: <Register></Register>,
            }
        ]
    },
    {
        path: "*",
        element: <h1>404 ERROR</h1>
    }
])

export default Router;