
import {
  createBrowserRouter,

} from "react-router-dom";

import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Main from "../layout/Main";
import Register from "../pages/Register/Register";
import Newp from "../pages/new/Newp";
import Home from "../pages/Home/Home";

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
        path: "/new",
        element: <Newp></Newp>

      },

      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
    ]
  },
]);