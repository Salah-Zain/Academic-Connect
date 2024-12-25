import React from "react";

const Details = ({ title, name, a, classn, div, id, img }) => {
  return (
    <div className="flex justify-center ">
      <div className="w-[100%] md:max-lg:w-[70%] lg:ml-14 p-5 rounded-lg border bg-slate-300 flex flex-col items-center justify-between ">
        <h1>{title}</h1>
        <div className="list-noneg two p-3 text-start">
          <div className="flex flex-col justify-center items-center rounded-lg mb-5">
            <img
              src={img}
              alt=""
              className="w-24 h-24 bg-green-100  rounded-full"
            />
          </div>
          <li>{name}</li>
          <li>{a}</li>
          {/* <li>{subject}:</li> */}
          <li>{classn}</li>
          <li>{div}</li>
          <li>{id}</li>
        </div>
      </div>
    </div>
  );
};

export default Details;
