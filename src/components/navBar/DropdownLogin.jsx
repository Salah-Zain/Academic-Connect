import React from "react";
import { Link } from "react-router-dom";

const DropdownLogin = () => {
  return (
    <div className="flex flex-col absolute top-[3rem] max-md:absolute max-md:top-[17.3rem] max-md:right-[5rem] max- right-[-30px] w-[110px] p-[0px] bg-white border rounded-lg border-gray-600">
      <ul className="flex flex-col gap-2 text-center ">
        <li className="hover:bg-slate-500 hover:text-white hover:rounded-t-lg">
          <Link to="/admin">Admin</Link>
        </li>
        <li className="hover:bg-slate-500 hover:text-white">
          <Link to="/teacher">Teacher</Link>
        </li>
        <li className="hover:bg-slate-500 hover:text-white">
          <Link to="/parent">Parent</Link>
        </li>
        <li className="hover:bg-slate-500 hover:text-white hover:rounded-b-lg">
          <Link to="/student">Student</Link>
        </li>
      </ul>
    </div>
  );
};

export default DropdownLogin;
