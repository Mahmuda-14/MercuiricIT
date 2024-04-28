
import {
  createBrowserRouter,

} from "react-router-dom";

import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Main from "../layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
  
      {
        path:"/",
        element:<Main></Main>

      },
      {
        path:"/login",
        element:<Login></Login>
    }
    ]
  },
]);