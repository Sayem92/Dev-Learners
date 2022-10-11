import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Main from "../components/Main";
import Quiz from "../components/Quiz";
import Statistics from "../components/Statistics";
import Topics from "../components/Topics";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                loader:() =>fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Home></Home>
            },
            {
                path: '/home',
                loader:() =>fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Home></Home>
            },
            {
                path:'/topics',
                loader:() =>fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Topics></Topics>
            },
            {
                path: '/quiz/:id',
                loader: async ({params}) =>{
                    return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)

                },
                element:<Quiz></Quiz>
            },
            {
                path:'/statistics',
                loader:() =>fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Statistics></Statistics>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            },
        ]
    }
])