import React from "react";

const StudentSectionOne = () => {
  return (
    <div className="container w-[100%] flex items-center justify-center">
      <div className="container max-w-[100%] w-[1440px] flex gap-10 items-center justify-center text-center">
        <div className="w-[20%] border-x-2">
          <h1 className="text-lg p-5 hover:text-cyan-600 hover:underline">
            Student Details
          </h1>
        </div>
        <div className="w-[20%] border-x-2">
          <h1 className="text-lg p-5 hover:text-cyan-600 hover:underline">
            View Your Grade
          </h1>
        </div>
        <div className="w-[20%] border-x-2">
          <h1 className="text-lg p-5 hover:text-cyan-600 hover:underline">
            Chat with Teacher
          </h1>
        </div>
        <div className="w-[20%] border-x-2">
          <h1 className="text-lg p-5 hover:text-cyan-600 hover:underline">
            Live Session
          </h1>
        </div>
      </div>
    </div>
  );
};

export default StudentSectionOne;
