import React from "react";
import Details from "../../../core/studentDetails";
import { studentDetails } from "../../../data";

const TeacherSectionTwo = ({ title, name, a, classn, div, id }) => {
  return (
    <div className="container w-[100%] flex justify-center items-center">
      <div className="container max-w-[100%] w-[1300px]  gap-10 items-center  text-center md:flex md:justify-center md:items-center md:flex-wrap">
        <div className="w-[90%] bg-gray-300 p-2 m-5 md:w-[30%] rounded-lg">
          <Details
            title={"Teacher Details"}
            name={"Teacher Name"}
            a={"Subject"}
            classn={"Class"}
            div={"Div"}
            id={"Id "}
          />
        </div>
      </div>
    </div>
  );
};

export default TeacherSectionTwo;
