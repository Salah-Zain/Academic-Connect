import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/home/Home";
import StudentForm from "./pages/student/StudentForm/StudentForm";
import Parent from "./pages/parent/parent";
import Teacher from "./pages/teacher/Teacher";
import Admin from "./pages/admin/Admin";
import StudentPage from "./pages/student/StudentPage";
import Principle from './pages/principle'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<StudentPage />} />
        <Route path="/parent" element={<Parent />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/studentsform" element={<StudentForm />} />
        <Route path="/principle" element={<Principle />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
