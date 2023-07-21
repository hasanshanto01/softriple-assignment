import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import All from "../Pages/Home/All/All";
import Men from "../Pages/Home/Men/Men";
import Women from "../Pages/Home/Women/Women";
import Baby from "../Pages/Home/Baby/Baby";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            // {
            //     path: "/",
            //     element: <All></All>
            // },
            {
                path: "/men",
                element: <Men></Men>
            },
            {
                path: "/women",
                element: <Women></Women>
            },
            {
                path: "/baby",
                element: <Baby></Baby>
            }
        ]
    },
]);