import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import AddToy from "../Pages/AddToy/AddToy";
import AllToy from "../Pages/AllToy/AllToy";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../ErrorPage/ErrorPage";
import MyToy from "../Pages/MyToy/MyToy";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'add',
                element: <AddToy></AddToy>
            },
            {
                path: 'toys',
                element: <PrivateRoute><AllToy></AllToy></PrivateRoute>
            },
            {
                path: 'mytoy',
                element: <PrivateRoute><MyToy></MyToy></PrivateRoute>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
]);





export default router;