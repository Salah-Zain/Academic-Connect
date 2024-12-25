import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropdownLogin from "./DropdownLogin";

const NavBarLinks = ({ openProfile, setOpenProfile }) => {
  return (
    <div className="flex flex-col md:flex-row list-none gap-5 p-5">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/gallery">Gallery</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li
        onClick={() => setOpenProfile(!openProfile)}
        // onMouseDown={() => setOpenProfile(false)}
      >
        <Link>Login</Link>
      </li>
    </div>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  const handleLogin = () => {
    setOpenProfile(!openProfile);
  };

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="w-1/5 flex justify-end">
        <div className="hidden md:flex justify-between">
          <NavBarLinks
            openProfile={openProfile}
            setOpenProfile={setOpenProfile}
          />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNav}>{isOpen ? "X" : "Menu"}</button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex items-center flex-col basis-full">
          <NavBarLinks
            openProfile={openProfile}
            setOpenProfile={setOpenProfile}
          />
        </div>
      )}
      {openProfile && (
        <DropdownLogin
          openProfile={openProfile}
          setOpenProfile={setOpenProfile}
          handleLogin={handleLogin}
        />
      )}
    </>
  );
};

export default Nav;
