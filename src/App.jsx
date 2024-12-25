import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home/Home";
import StudentForm from "./pages/student/StudentForm";
import StudentPage from "./pages/student/StudentPage";
import ParentForm from "./pages/parent/parentForm";
import ParentPage from "./pages/parent/ParentPage";
import TeacherForm from "./pages/teacher/teacherForm";
import TeacherPage from "./pages/teacher/TeacherPage";
import Principle from "./pages/principle";
import AdminForm from "./pages/admin/adminForm/Admin";
import AdminPage from "./pages/admin/AdminPage";
import StudentFormDetails from "./pages/admin/addingStudent";
import TeacherFormDetails from "./pages/admin/addingTeacher";
import users from "../../Academic_backend/user";

const App = () => {
  const [user, setUser] = useState(users);

  const getUser = () => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((json) => setUser(json));
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/studentform" element={<StudentForm />} />
          <Route path="/student" element={<StudentPage />} />
          <Route path="/parentform" element={<ParentForm />} />
          <Route path="/parent" element={<ParentPage />} />
          <Route path="/teacherform" element={<TeacherForm />} />
          <Route path="/teacher" element={<TeacherPage />} />
          <Route path="/principle" element={<Principle />} />
          <Route path="/adminform" element={<AdminForm />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/addstudents" element={<StudentFormDetails />} />
          <Route path="/addteachers" element={<TeacherFormDetails />} />
        </Routes>
      </BrowserRouter>

      <div>
        {user.map((data) => (
          <>
            <div key={data.id} className="border border-gray-600 w-[500px]">
              <h1>Name : {data.name}</h1>
              <h1>Username : {data.username}</h1>
              <h1>Email : {data.email}</h1>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default App;
