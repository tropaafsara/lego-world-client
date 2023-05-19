import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AddToy from "../pages/AddToy/AddToy";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";
import Toys from "../pages/Home/Toys/Toys";
import A from "../pages/A";
import AllToys from "../pages/AllToys/AllToys";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'alltoys',
            element: <AllToys></AllToys>
        },
        {
            path: 'signup',
            element: <SignUp></SignUp>
        },
        {
            path: 'toys',
            element: <PrivateRoute><Toys></Toys></PrivateRoute>
        },
        {
            path: 'addtoys',
            element: <PrivateRoute><A></A></PrivateRoute>
        },
        {
            path: 'bookings',
            element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
        },
      ]
    },
  ]);

  export default router;