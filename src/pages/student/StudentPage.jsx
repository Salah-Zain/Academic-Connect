import React from "react";
import StudentSectionOne from "./studentSectionOne";
import StudentSectionTwo from "./studentSectionTwo";
import StudentSectionThree from "./studentSectionThree";

const StudentPage = ({ greeting }) => {
  return (
    <>
      {/* <StudentForm /> */}
      <StudentSectionOne />
      <StudentSectionTwo />
      <StudentSectionThree />
    </>
  );
};

export default StudentPage;
