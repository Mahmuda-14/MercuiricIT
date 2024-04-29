
import {  Outlet } from "react-router-dom";
// import Login from "../pages/Login/Login";




const Main = () => {
    return (
        <div>

         
            <Link to="/login"><button className="btn-primary">login</button> </Link> 
            <Outlet></Outlet> 
            

              {/* <Login></Login>    */}
        </div>
    );
};

export default Main;