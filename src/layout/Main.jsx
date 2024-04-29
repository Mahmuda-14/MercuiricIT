import {  Outlet } from "react-router-dom";
import Login from "../pages/Login/Login";



const Main = () => {
    return (
        <div>
            <Outlet></Outlet>   
              <Login></Login>   
        </div>
    );
};

export default Main;