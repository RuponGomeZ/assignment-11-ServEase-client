import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AddService from '../pages/AddService';
import PrivateRoute from './PrivateRoute';
import AllServices from '../pages/AllServices';
import PopularServices from '../componenets/PopularServices';
import ServiceDetails from './ServiceDetails';
import BookService from '../pages/BookService';
import ManageService from '../pages/ManageService';
import EditService from '../pages/EditService';
import BookedServices from '../pages/BookedServices';
import ServicesToDo from '../pages/ServicesToDo';
import ServiceCard from '../componenets/ServiceCard';


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
            },
            {
                path: '/addService',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/allServices',
                element: <AllServices></AllServices>
            },
            {
                path: '/popularServices',
                element: <PopularServices></PopularServices>
            },
            {
                path: '/serviceDetails/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/serviceDetails/${params.id}`)
            },
            {
                path: '/bookService/:id',
                element: <PrivateRoute><BookService></BookService></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/serviceDetails/${params.id}`)
            },
            {
                path: '/manageService',
                element: <PrivateRoute><ManageService></ManageService></PrivateRoute>
            },
            {
                path: '/editService/:id',
                element: <PrivateRoute><EditService></EditService></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/serviceDetails/${params.id}`)
            },
            {
                path: '/bookedServices',
                element: <PrivateRoute><BookedServices></BookedServices></PrivateRoute>
            },
            {
                path: '/servicesToDo',
                element: <PrivateRoute><ServicesToDo></ServicesToDo></PrivateRoute>
            }
        ]
    },
]);

export default router
