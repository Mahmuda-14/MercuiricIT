
import {
  createBrowserRouter,

} from "react-router-dom";
// import "./index.css";
// import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Main from "../layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:"/",
        element:<Main></Main>

      }
    ]
  },
]);