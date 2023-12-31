import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";
import A from "../pages/A";
import AllToys from "../pages/AllToys/AllToys";
import UpdateModal from "../pages/UpdateModal/UpdateModal";
import Blog from "../pages/Blog/Blog";
import ToyInfo from "../pages/ToyInfo/ToyInfo";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
// import AllToys from "../pages/AllToys/AllToys";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
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
            path: 'blog',
            element: <Blog></Blog>
        },
        {
            path: '/toys/:id',
            element: <ToyInfo></ToyInfo>,
            loader: ({params})=> fetch(`https://lego-world-server-tasnimafsara12-gmailcom.vercel.app/toys/${params.id}`)
        },
        
        {
            path: 'addtoys',
            element: <PrivateRoute><A></A></PrivateRoute>
        },
        {
            path: 'bookings',
            element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
        }
      ]
    },
  ]);

  export default router;