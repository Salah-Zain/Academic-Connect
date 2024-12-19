import React from "react";
import { digitalCards } from "../../../data"; // Ensure this points to the correct path
import DigitalCards from "../../../core/digitalCards"; // Ensure this path is correct

const ParentSectionThree = () => {
  return (
    <div className="container w-[100%] flex justify-center items-center bg-slate-100">
      <div className="container-wrap max-w-[100%] w-[1330px] flex flex-col justify-center items-center">
        <h1 className="text-center text-3xl font-bold m-5">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <div className="section3 w-[85%] lg:grid lg:grid-cols-3 ml-40 gap-5 p-10">
          {digitalCards &&
            digitalCards.map((item, i) => (
              <DigitalCards
                key={i}
                img={item.img}
                title={item.heading}
                text={item.button}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ParentSectionThree;
