import React from "react";
import StudentDetails from "../../../core/studentDetails";
import { studentDetails } from "../../../data";

const ParentSectionTwo = () => {
  return (
    <div className="container w-[100%] flex justify-center items-center">
      <div className="container max-w-[100%] w-[1300px]  gap-10 items-center  text-center md:flex md:justify-center md:items-center md:flex-wrap">
        <div className="w-[90%] p-5 m-5 md:w-[60%] list-none rounded-lg grid grid-cols-2  gap-5">
          {studentDetails.map((item, i) => (
            <StudentDetails
              key={i}
              title={item.title}
              name={item.name}
              a={item.s}
              // subject={item.subject}
              classn={item.class}
              div={item.div}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParentSectionTwo;
