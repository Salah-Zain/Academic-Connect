import React, { useState } from "react";
import NavBar from "../../../components/navBar/NavBar";
import axios from "axios";
import { useNavigate } from "react-router";

const StudentForm = () => {
  const Navigation = useNavigate()
  // State to store form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    place: "",
    address: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
 
  };

  return (
    <div>
      <NavBar />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-4xl font-extrabold text-zinc-700 m-5">
          Welcome to Student Page
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="border border-red-800 w-[500px] p-4">
            <h2 className="text-2xl text-center font-semibold m-2">Register</h2>
            <p className="text-md text-center m-2">Please fill this form</p>
            <hr />

            <label htmlFor="firstName">First Name</label>
            <input
              className="w-full p-2 mb-4 bg-[#f1f1f1] focus:bg-[#ddd] focus:outline-none"
              type="text"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <hr />

            <label htmlFor="lastName">Last Name</label>
            <input
              className="w-full p-2 mb-4 bg-[#f1f1f1] focus:bg-[#ddd] focus:outline-none"
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <hr />

            <label htmlFor="phoneNumber">Parent Phone Number</label>
            <input
              className="w-full p-2 mb-4 bg-[#f1f1f1] focus:bg-[#ddd] focus:outline-none"
              type="number"
              name="phoneNumber"
              placeholder="Parent Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            <hr />

            <label htmlFor="place">Place</label>
            <input
              className="w-full p-2 mb-4 bg-[#f1f1f1] focus:bg-[#ddd] focus:outline-none"
              type="text"
              name="place"
              placeholder="Place"
              value={formData.place}
              onChange={handleChange}
              required
            />
            <hr />

            <label htmlFor="address">Address</label>
            <input
              className="w-full p-2 mb-4 bg-[#f1f1f1] focus:bg-[#ddd] focus:outline-none"
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <hr />

            <div className="flex justify-center items-center">
              <button
                className="border-none bg-[#04AA6D] w-full text-white px-5 py-4 my-3 mx-0 opacity-[0.9] hover:opacity-[1]"
                type="submit"
              >
                Register
              </button>
            </div>
          </div>
        </form>

        <div className="bg-[#f1f1f1] w-[500px] text-center">
          <p className="p-4">
            Already have an account?{" "}
            <a href="" className="text-blue-600 hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
