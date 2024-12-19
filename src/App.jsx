import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home/Home";
import StudentForm from "./pages/student/StudentForm";
import StudentPage from "./pages/student/StudentPage";
import ParentForm from "./pages/parent/parentForm";
import ParentPage from "./pages/parent/ParentPage";
import TeacherForm from "./pages/teacher/teacherForm";
import TeacherPage from "./pages/teacher/TeacherPage";
import Principle from "./pages/principle";
import Admin from "./pages/admin/Admin";

const App = () => {
  const getGreeting = () => {
    const now = new Date();
    const hours = now.getHours();

    if (hours < 12) {
      return "Good Morning";
    } else if (hours < 18) {
      return "Good Afternoon";
    } else {
      return "Good Night";
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studentform" element={<StudentForm />} />
        <Route
          path="/student"
          element={<StudentPage greeting={getGreeting()} />}
        />
        <Route path="/parentform" element={<ParentForm />} />
        <Route path="/parent" element={<ParentPage />} />
        <Route path="/teacherform" element={<TeacherForm />} />
        <Route path="/teacher" element={<TeacherPage />} />
        <Route path="/principle" element={<Principle />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
