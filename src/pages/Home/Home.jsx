

import Navbar from "../../Shared/Navbar/Navbar";

import { NavLink, Outlet, Route } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { TbReportSearch } from "react-icons/tb";
import { FaMapMarked } from "react-icons/fa";
import { FaFlaskVial } from "react-icons/fa6";
import { IoFlask } from "react-icons/io5";
import { FaTablets } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { IoCreateSharp } from "react-icons/io5";
import { TbTableShortcut } from "react-icons/tb";
import { GrValidate } from "react-icons/gr";
const Home = () => {
    return (
        <div className="relative">
            <div className="fixed z-10 w-[100%]">
                <Navbar></Navbar>
            </div>
            <div className="flex">
                <div className="fixed mt-16 left-0 top-0 h-full w-64 bg-blue-200 border-y-4 border-y-blue-700 overflow-y-auto">
                    <h2 className="text-center mb-11 mt-8 font-bold text-2xl">Dashboard</h2>
                    <hr />

                    <ul className="menu p-4 ">
                        <li>
                            <NavLink to="/dashboard/profile">
                                <CgProfile />   Profile
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/invoice">
                                <LiaFileInvoiceSolid /> Invoice
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/reports">
                                <TbReportSearch />  Reports
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/dashboard/branches">
                                <FaMapMarked />Branches
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/tests">
                                <FaFlaskVial />  Tests
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/cultures">
                                <IoFlask /> Cultures
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/cultureOptions">
                              <IoFlask/>  CultureOptions
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/antibiotics">
                                <FaTablets/> Antibiotics
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/doctor">
                             <FaUserDoctor/>   Doctor
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/create">
                            <IoCreateSharp/>    Create Form
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/validate">
                             <GrValidate/>  Validation
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/table">
                             <TbTableShortcut/>   Table
                            </NavLink>
                        </li>
                        <details className=" menu ">
                            <summary className=" ">PriceList</summary>
                            <ul className="">
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



                </div>

                <div className="flex-1 ml-64 mt-20">
                    <Outlet />

                    {/*  */}
                </div>
            </div>
        </div>
    );
};

export default Home;
