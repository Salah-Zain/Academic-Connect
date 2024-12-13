import React from "react";
import NavBar from "../../components/navBar/NavBar";

const Parent = () => {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-4xl font-extrabold  text-zinc-700 m-5">
          Welcome to Parent Page
        </h1>

        <form action="">
          <div className="border border-red-800 w-[500px] p-4">
            <h2 className="text-2xl text-center font-semibold m-2">Register</h2>
            <p className="text-md text-center m-2">Please fill this form</p>
            <hr />

            <label htmlFor="" id="fname">
              First Name
            </label>
            <input
              className="w-full p-2 m-[5px 0 22px 0] inline-block border-none bg-[#f1f1f1] focus:bg-[#ddd] focus:outline-none"
              type="text"
              placeholder="First Name"
              name="uname"
              required
            />
            <hr />
            <label htmlFor="" id="lname">
              student name{" "}
            </label>
            <input
              className="w-full p-2 m-[5px 0 22px 0] inline-block border-none bg-[#f1f1f1] focus:bg-[#ddd] focus:outline-none"
              type="text"
              placeholder="Last Name"
              name="uname"
              required
            />
            <hr />

            <label htmlFor="" id="phno">
              phone{" "}
            </label>
            <input
              className="w-full p-2 m-[5px 0 22px 0] inline-block border-none bg-[#f1f1f1] focus:bg-[#ddd] focus:outline-none"
              type="number"
              name="ph-num"
              placeholder="Parent Phone Number"
              required
            />
            <hr />

            <label htmlFor="" id="admno">
              register Number
            </label>
            <input
              className="w-full p-2 m-[5px 0 22px 0] inline-block border-none bg-[#f1f1f1] focus:bg-[#ddd] focus:outline-none"
              type="number"
              name="adm-no"
              placeholder="Admission Number"
              required
            />
            <hr />

            <label htmlFor="" id="sclassdiv">
              Student Class Div
            </label>
            <input
              className="w-full p-2 m-[5px 0 22px 0] inline-block border-none bg-[#f1f1f1] focus:bg-[#ddd] focus:outline-none"
              type="text"
              name="s-class-div"
              placeholder="Student Class Div"
              required
            />
            <hr />

            <div className="flex justify-center items-center">
              <button className="border-none bg-[#04AA6D] w-full text-white px-5 py-4 my-3 mx-0 opacity-[0.9] hover:opacity-[1]">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Parent;
