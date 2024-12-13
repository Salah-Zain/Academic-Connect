import React from "react";

const StudentSectionTwo = () => {
  return (
    <div className="container w-[100%] flex justify-center items-center bg-slate-700 ">
      <div className="container max-w-[100%] w-[1400px]  gap-10 items-center  text-center bg-orange-600 md:flex md:justify-center md:items-center md:flex-wrap">
        <div className="w-[90%] bg-orange-400 p-2 m-5 md:w-[30%]">
          <h1>Sudent Details</h1>
          <div className="list-ntwo p-3 text-start">
            <li>Sudent Name:</li>
            <li>Age:</li>
            <li>Class:</li>
            <li>Div:</li>
            <li>Id:</li>
          </div>
        </div>
        <div className="w-[90%] bg-orange-400 p-2 m-5 md:w-[30%]">
          <h1>Connect with Teacher</h1>
          <div className="list-none p-3 text-start">
            <li className="p-2">Chat with Teacher</li>
            <li className="p-2">Live Session with Teacher</li>
            <li className="p-2">View Attendence</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSectionTwo;
