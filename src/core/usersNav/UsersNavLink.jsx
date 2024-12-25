import React, { useState } from "react";
import { Link } from "react-router-dom";

const UsersNavLinks = () => (
  <ul className="flex flex-col md:flex-row list-none gap-5">
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
    <li>
      <Link to="/">LogOut</Link>
    </li>
  </ul>
);

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-1/5">
      <div className="hidden md:flex md:justify-end">
        <UsersNavLinks />
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "X" : "Menu"}
        </button>
      </div>
      <div>{isOpen && <UsersNavLinks />}</div>
    </nav>
  );
};

export default Nav;
