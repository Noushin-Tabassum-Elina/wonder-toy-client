import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Banner from "../Pages/Home/Banner/Banner";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Home from "../Pages/Home/Home/Home";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import AllToys from "../Pages/AllToys/AllToys";
import AddToy from "../Pages/AddToy/AddToy";
import MyToys from "../Pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import Blog from "../Pages/Blog/Blog";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <Signup></Signup>
        },
        {
            path: '/alltoys',
            element: <AllToys></AllToys>
        },
        {
            path: '/addtoy',
            element: <PrivateRoute><AddToy></AddToy></PrivateRoute>,
        },
        {
            path: '/mytoy',
            element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
            path: '/toys/:_id',
            element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
            loader: ({params}) => fetch('alltoys.json/toys/:{params._id}')
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        }
       
      ],
     
    },
    {
        path: '*',
        element: <Error></Error>
    }
   
  ]);

  export default router;