import React, { useState } from "react";

const NavBar = () => {
  const [btn, setBtn] = useState(false);
  const [loginBtn, setLoginBtn] = useState(false);

  const handleBtn = () => {
    setBtn(!btn);
    setLoginBtn(false);
  };

  const handleLogin = () => {
    setLoginBtn(!loginBtn);
  };

  return (
    <>
      <div className="container w-[100%] flex justify-center items-center bg-stone-300 ">
        <div className="container-wrap max-w-[100%] w-[1300px] flex justify-center items-center ">
          <div className="nav-container w-[100%] flex justify-between items-center">
            <div className="nav-logo flex items-center w-[100%] md:w-[80%]">
              <img
                src=""
                alt=""
                className="W-6 h-6 bg-stone-900 rounded-full p-5 lg:w-16 lg:h-16 m-1"
              />
              <h1 className="text-xs pl-2 min-[725] md:text-xl">
                Kadachira Heigher Secondary School
              </h1>
            </div>
            <div className="nav-list hidden list-none lg:flex lg:justify-between items-center text-sm lg:w-[45%]">
              <li className="p-1">Home</li>
              <li className="p-1">About</li>
              <li className="p-1">Admission</li>
              <li className="p-1">Gallery</li>
              <li className="p-1">Contact</li>
              <li className="p-1">
                <button onClick={handleLogin} className="">
                  Login
                </button>
              </li>
            </div>
          </div>

          <div className="nav-button m-3 flex items-center md:text-lg lg:hidden">
            {btn ? (
              <button onClick={handleBtn}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            ) : (
              <button onClick={handleBtn}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* hamburger nav link */}
      <div className="">
        {btn && (
          <div className="list-none bg-stone-300 md:text-center md:w-[80%] md:ml-16 text-[0.7rem]">
            <li className="p-1 hover:bg-slate-500">Home</li>
            <li className="p-1 hover:bg-slate-500">About</li>
            <li className="p-1 hover:bg-slate-500">Admission</li>
            <li className="p-1 hover:bg-slate-500">Gallery</li>
            <li className="p-1 hover:bg-slate-500">Contact</li>
            <li className="p-1 hover:bg-slate-500 ">
              <button onClick={handleLogin} className="">
                Login
              </button>
            </li>
          </div>
        )}
      </div>

      {/* login nav links */}
      <div>
        <div className="md:pl-[350px]">
          {loginBtn && (
            <div className="list-none ml-10 w-32 pl-2 bg-stone-500 text-[0.7rem] lg:ml-[1030px] lg:text-sm lg:relative lg:bottom-6">
              <li className="p-1 hover:bg-slate-500">Admin</li>
              <li className="p-1 hover:bg-slate-500">Teacher</li>
              <li className="p-1 hover:bg-slate-500">Parent</li>
              <li className="p-1 hover:bg-slate-500">Student</li>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
