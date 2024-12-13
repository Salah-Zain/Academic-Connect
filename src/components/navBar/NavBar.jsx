import React from "react";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <div>
      <div className="Nav-Container w-screen flex justify-center">
        <div className="Nav-Container-Wrap w-[80%] flex justify-between items-center">
          <div>
            <h1 className="pl-8 text-2xl font-extrabold text-slate-500">
              Academic Connect
            </h1>
          </div>
          <div className="flex items-center list-none p-4">
            <li className="p-2">
              <Link to="/">Home</Link>
            </li>
            <li className="p-2">
              <Link to="/studentsform">Student</Link>
            </li>
            <li className="p-2">
              <Link to="/parent">Parent</Link>
            </li>
            <li className="p-2">
              <Link to="/teacher">Teacher</Link>
            </li>
            <li className="p-2">
              <Link to="/admin">Admin</Link>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
