
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

import Table from "../components/Table/Table";
import AdvancedTable from "../components/Table/AdvancedTable";
import UserProfile from "../pages/Profile/UserProfile";
import Invoice from "../pages/Invoice/Invoice";
import Reports from "../pages/Reports/Reports";
import Branches from "../pages/Branches/Branches";
import Tests from "../pages/Tests/Tests";
import Cultures from "../pages/Cultures/Cultures";
import CultureOptions from "../pages/CultureOptions/CultureOptions";
import Antibiotics from "../pages/Antibiotics/Antibiotics";
import Doctor from "../pages/Doctor/Doctor";

import New from "../New";
import Validate from "../pages/Validate/Validate";


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
        path: "table",
        element: <AdvancedTable></AdvancedTable>

      },

      {
        path: "update",
        element: <Update></Update>,
        loader: ({ params }) => fetch(`http://localhost:5000/profile/${params.id}`)

      },
      {
        path: "profile",
        element: <UserProfile></UserProfile>

      },
      {
        path: "invoice",
        element: <Invoice></Invoice>

      },
      {
        path: "reports",
        element: <Reports></Reports>

      },
      {
        path: "branches",
        element: <Branches></Branches>

      },
      {
        path: "tests",
        element: <Tests></Tests>

      },
      {
        path: "cultures",
        element: <Cultures></Cultures>

      },
      {
        path: "cultureOptions",
        element: <CultureOptions></CultureOptions>

      },
      {
        path: "antibiotics",
        element: <Antibiotics></Antibiotics>

      },
      {
        path: "doctor",
        element: <Doctor></Doctor>
      },





    ]
  },
]);