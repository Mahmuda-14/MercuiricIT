
import { NavLink, Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex">
            <div className="fixed left-0 top-0 h-full w-64 bg-blue-200 border-y-4 border-y-blue-700 overflow-y-auto">
                <h2 className="text-center mb-11 mt-8 font-bold text-2xl">Dashboard</h2>
                <hr />
                <details className=" menu">
                    <summary className=" btn">form</summary>
                    <ul className="p-4">
                        <li>
                            <NavLink to="/dashboard/create">
                                Create
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/update">
                                Update
                            </NavLink>
                        </li>

                    </ul>
                   
                </details>

                <ul className="menu p-4">
                        <li>
                            <NavLink to="/dashboard/create">
                                Create
                            </NavLink>
                        </li>
                    </ul>

            </div>

            <div className="flex-1 ml-64">
                <Outlet />
            </div>
        </div>
    );
};

export default Home;
