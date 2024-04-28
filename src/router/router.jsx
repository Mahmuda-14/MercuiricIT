
import {
  createBrowserRouter,

} from "react-router-dom";
import "./index.css";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:"/login",
            element:<Login></Login>
        }
    ]
  },
]);