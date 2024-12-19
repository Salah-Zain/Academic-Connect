import React from "react";

const Details = ({ title, name, a, classn, div, id }) => {
  return (
    <div className="w-[100%] p-5 rounded-lg border bg-slate-400">
      <h1>{title}</h1>
      <div className="list-ntwo p-3 text-start">
        <li>{name}:</li>
        <li>{a}:</li>
        {/* <li>{subject}:</li> */}
        <li>{classn}:</li>
        <li>{div}:</li>
        <li>{id}:</li>
      </div>
    </div>
  );
};

export default Details;
