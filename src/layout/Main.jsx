import { Link, Outlet } from "react-router-dom";
import Login from "../pages/Login/Login";



const Main = () => {
    return (
        <div>
         <Link to="/login"><button className="btn-primary">login</button> </Link> 
            <Outlet></Outlet> 
        </div>
    );
};

export default Main;