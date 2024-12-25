import React from "react";
import NavBar from "../../../components/navBar/NavBar";

const TeacherForm = () => {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-4xl font-extrabold text-slate-700 m-5">
          Welcome to Teacher Page
        </h1>

        <form action="">
          <div className="border border-gray-200 w-[500px] p-4">
            <h3 className="text-2xl text-center font-semibold m-2">Login</h3>
            <hr />

            <label htmlFor="" id="tid">
              User Name
            </label>
            <input
              className="w-full p-2 m-[5px 0 22px 0] border-none bg-[#f1f1f1] focus:bg-[#ddd] focus:outline-none inline-block"
              type="text"
              placeholder="User Name"
              required
            />
            <hr />

            <label htmlFor="" id="passwd">
              Password
            </label>
            <input
              className="w-full p-2 m-[5px 0 22px 0] border-none bg-[#f1f1f1] focus:bg-[#ddd] focus:outline-none inline-block"
              type="password"
              placeholder="Password"
              required
            />
            <hr />

            <label htmlFor="" id="con-passwd">
              Confirm Password
            </label>
            <input
              className="w-full p-2 m-[5px 0 22px 0] border-none bg-[#f1f1f1] focus:bg-[#ddd] focus:outline-none inline-block"
              type="password"
              placeholder="Confirm Password"
              required
            />
            <hr />

            <div>
              <button className="border-none bg-[#04AA6D] w-full text-[white] py-4 px-5 my-3 mx-0 opacity-[0.9] hover:opacity-[1]">
                Submit
              </button>
            </div>
          </div>
        </form>

        {/* <div className="w-[500px] bg-[#f1f1f1] text-center p-4 rounded">
          <a href="" className="text-blue-600 hover:underline">
            forget Password
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default TeacherForm;
