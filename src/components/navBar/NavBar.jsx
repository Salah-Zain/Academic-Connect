import React, { useState } from "react";
import Logo from "./Logo";
import NavBarLinks from "./NavBarLinks";

const NavBar = () => {
  const [btn, setBtn] = useState(false);
  const [loginBtn, setLoginBtn] = useState(false);

  return (
    <>
      <div className="w-[100%] bg-amber-100 flex justify-center items-center box-border ">
        <header className="w-[80%] bg-slate sticky top-0 z-[20] mx-auto flex flex-wrap items-center justify-between  border-b  ">
          <Logo />
          <NavBarLinks />
        </header>
      </div>
    </>
  );
};

export default NavBar;
