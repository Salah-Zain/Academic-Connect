import React from "react";

const StudentNav = () => {
  return (
    <div>
      <div className="container w-[100%] flex justify-center items-center">
        <div className="container-wrap max-w-[1440px] w-[100%] flex justify-evenly items-center">
          <div className="logo w-[10%] m-2 flex items-center justify-center">
            <img src="" alt="" className="w-16 h-16 rounded-full bg-red-500" />
          </div>
          <div className="p-3 bg-slate-500 w-[40%] flex justify-center items-center">
            <h1 className="text-xl font-semibold">
              Kadachira Heigher Secondary School
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentNav;
