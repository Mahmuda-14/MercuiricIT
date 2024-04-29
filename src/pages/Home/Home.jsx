
import { NavLink, Outlet, Route } from "react-router-dom";
import Update from "../Update/Update";

const Home = () => {
    return (
        <div className="flex">
            <div className="fixed left-0 top-0 h-full w-64 bg-blue-200 border-y-4 border-y-blue-700 overflow-y-auto">
                <h2 className="text-center mb-11 mt-8 font-bold text-2xl">Dashboard</h2>
                <hr />

                <ul className="mx-7">
                    <li>
                        <NavLink to="/dashboard/profile">
                            Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/invoice">
                            Invoice
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reports">
                            Reports
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/invoice">
                            Invoice
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/branches">
                            Branches
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/tests">
                            Tests
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cultures">
                            Cultures
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cultureOptions">
                            CultureOptions
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/antibiotics">
                            Antibiotics
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/doctor">
                            Doctor
                        </NavLink>
                    </li>
                    <details className=" menu">
                        <summary className=" btn">PriceList</summary>
                        <ul className=" p-4">
                            <li>
                                <NavLink to="/dashboard/test">
                                    Test
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/culture">
                                    Culture
                                </NavLink>
                            </li>

                        </ul>
                    </details>
                </ul>
                <details className=" menu">
                    <summary className=" btn">form</summary>
                    <ul className=" p-4">
                        <li>
                            <NavLink to="/dashboard/create">
                                Create
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/table">
                                Table
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/update">
                                Update
                            </NavLink>
                        </li>

                    </ul>
                </details>


            </div>

            <div className="flex-1 ml-64">
                <Outlet />

                {/*  */}
            </div>
        </div>
    );
};

export default Home;
