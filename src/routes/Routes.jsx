import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <h2>Error Found</h2>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
]);

export default router
