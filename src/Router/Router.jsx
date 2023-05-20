import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import AddToy from "../Pages/AddToy/AddToy";


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
            }
        ]
    },
]);





export default router;