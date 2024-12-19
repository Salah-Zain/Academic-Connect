import { button } from "framer-motion/client";
import React from "react";

  const DigitalCards = ({img, title, text}) => {
  return (
    <div>
      <div className="attendance w-56 rounded-lg border">
        <div className="flex flex-col justify-center items-center p-2 rounded-lg">
          <img src={img} alt="" className="w-24 h-24 bg-green-100  rounded-full" />
          <h1 className="p-2">{title}</h1>
          <button className="py-2	px-8 bg-blue-300 text-slate-100 hover:bg-blue-500 rounded-lg m-5">
            {text}
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default DigitalCards
