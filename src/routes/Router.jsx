import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import CategoryNews from "../Components/Pages/CategoryNews";


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
        path: "/news",
        element: <h1>News Layout</h1>
    },
    {
        path:"/auth",
        element: <h1>Login</h1>
    },
    {
        path: "*",
        element: <h1>404 ERROR</h1>
    }
])

export default Router;