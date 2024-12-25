import React, { useState } from "react";
import UsersNavLinks from "./../usersNav/UsersNavLink";
import Greeting from "./Greeting";

const UsersNav = ({ name }) => {
  const date = new Date();
  const hours = date.getHours();

  const handleGreeting = () => {
    if (hours < 12) {
      return "Good Morning";
    } else if (hours < 18) {
      return "Good Afternoon";
    } else {
      return "Good Night";
    }
  };

  return (
    <>
      <div className="w-[100%] flex justify-center items-center box-border bg-slate-300">
        <header className="w-[80%] bg-slate sticky top-0 z-[20]  flex flex-wrap justify-between items-center p-2">
          <Greeting greeting={handleGreeting()} name={name} />
          <UsersNavLinks />
        </header>
      </div>
    </>
  );
};

export default UsersNav;
