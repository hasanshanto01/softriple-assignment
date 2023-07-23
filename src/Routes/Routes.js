import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Men from "../Pages/Home/Men/Men";
import Women from "../Pages/Home/Women/Women";
import Baby from "../Pages/Home/Baby/Baby";
import DetailsPage from '../Pages/DetailsPage/DetailsPage/DetailsPage';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
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
            },
            {
                path: "/details/:productId",
                loader: async ({ params }) => {
                    return fetch('products.json');
                },
                element: <DetailsPage></DetailsPage>
            }
        ]
    },
    {
        path: "/register",
        element: <Register></Register>
    },
    {
        path: "/login",
        element: <Login></Login>
    }
]);