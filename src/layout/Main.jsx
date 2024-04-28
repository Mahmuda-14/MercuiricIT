import { Link } from "react-router-dom";
import Login from "../pages/Login/Login";


const Main = () => {
    return (
        <div>
            <Login></Login>
            <button className="btn-circle">submit</button>
        </div>
    );
};

export default Main;