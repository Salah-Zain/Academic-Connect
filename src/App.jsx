import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home/Home";
import StudentPage from "./pages/student/StudentPage";
import StudentForm from "./pages/student/StudentForm";
import ParentPage from "./pages/parent/ParentPage";
import Teacher from "./pages/teacher/teacherForm";
import Principle from "./pages/principle";
import Admin from "./pages/admin/Admin";
import ParentForm from "./pages/parent/parentForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/studentsform" element={<StudentForm />} />
        <Route path="/parentform" element={<ParentForm />} />
        <Route path="/parent" element={<ParentPage />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/principle" element={<Principle />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
