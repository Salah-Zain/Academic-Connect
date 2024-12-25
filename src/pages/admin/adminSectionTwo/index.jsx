import React from "react";
import { Link } from "react-router";

const AdminSectionTwo = () => {
  return (
    <div className="container w-[100%] flex justify-center items-center bg-slate-200">
      <div className="section3 w-[80%] flex justify-evenly items-center relative m-10 max-md:flex max-md:flex-col">
        {/* adding students */}
        <div className="w-[30%] max-md:w-[90%] flex flex-col justify-between items-center p-3 rounded-lg border border-black mb-5">
          <img src="" alt="" className="w-24 h-24 bg-green-100  rounded-full" />
          <h1 className="p-2">Add Student</h1>
          <Link to="/addstudents">
            <button className="py-2	px-8 bg-blue-300 text-slate-100 hover:bg-blue-500 rounded-lg m-5">
              Click Here
            </button>
          </Link>
        </div>

        {/* adding teachers */}
        <div className="w-[30%] max-md:w-[90%] flex flex-col  justify-between items-center p-3 rounded-lg border border-black mb-5">
          <img src="" alt="" className="w-24 h-24 bg-green-100  rounded-full" />
          <h1 className="p-2">Add Teacher</h1>
          <Link to="/addteachers">
            <button className="py-2	px-8 bg-blue-300 text-slate-100 hover:bg-blue-500 rounded-lg m-5">
              Click Here
            </button>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default AdminSectionTwo;
