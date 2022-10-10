import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import Home from "../components/Home";
import Main from "../components/Main";
import Statistics from "../components/Statistics";
import Topics from "../components/Topics";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path:'/topics',
                element: <Topics></Topics>
            },
            {
                path:'/statistics',
                element: <Statistics></Statistics>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            },
        ]
    }
])