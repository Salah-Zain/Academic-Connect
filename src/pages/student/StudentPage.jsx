import React from "react";
import StudentNav from "./StudentNav/StudentNav";
import StudentSectionOne from "./studentSectionOne/StudentSectionOne";
import StudentSectionTwo from "./studentSectionTwo/StudentSectionTwo";
import StudentForm from "./StudentForm/StudentForm";

const StudentPage = () => {
  return (
    <>
    {/* <StudentForm /> */}
      <StudentNav />
      <StudentSectionOne />
      <StudentSectionTwo />
    </>
  );
};

export default StudentPage;
