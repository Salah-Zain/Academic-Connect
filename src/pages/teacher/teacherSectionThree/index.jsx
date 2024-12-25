import React from "react";
import { digitalCards } from "../../../data"; // Ensure this points to the correct path
import DigitalCards from "../../../core/digitalCards"; // Ensure this path is correct

const TeacherSectionThree = () => {
  return (
    <>
      <div className="container w-[100%] flex justify-center items-center bg-slate-200">
        <div className="section3 w-[80%] lg:grid lg:grid-cols-3 gap-5 max-lg:grid max-lg:grid-cols-2 max-md:grid max-md:grid-cols-1 md:align-middle mt-10">
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
    </>
  );
};

export default TeacherSectionThree;
