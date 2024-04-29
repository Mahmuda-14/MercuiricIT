
import {
  createBrowserRouter,

} from "react-router-dom";

import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Main from "../layout/Main";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import Create from "../pages/Create/Create";
import Update from "../pages/Update/Update";
import New from "../New";
// import New from "../pages/New";
// import New from "../pages/new";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <New></New>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
    ]
  },
  {
    path: "dashboard",
    element: <Home></Home>,
    children: [

    
      {
        path: "create",
        element: <Create></Create>

      },
      
      {
        path: "update",
        element: <Update></Update>

      },


    ]
  },
]);